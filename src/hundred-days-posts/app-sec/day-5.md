---
slug: "/day-5"
title: "AppSec: day 5"
short: "Day 5 learning App Sec - Finding first bug, start Portswigger path"
date: "2021-02-19"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

## Youtube video:

[[youtube: N9YODrMUk5A]]

- Often different from desktop apis
- APIs can be mobile app only

## General approach

1. Find endpoints
2. link back into business logic and highlevel features
3. Look for signs of usual bugs
    1. Large response - info disclosure
    2. IDs? IDOR
    3. authenication required? Confirm that
4. Go through one by one

### Useful vidoes

[[youtube: yCUQBc2rY9Y]]

[[youtube: aQGbYfalRTA]]

[[youtube: fvcKwUS4PTE]]

- Mobile apis often batch requests. Needed to be able to handle intermittenent connection

### Restful apis

- Most common API type
- Very clearly defined structure, CRUD
- Hard to hack - but not impossible
- Recon techniques
    - API Recon + Tomnomnom (see above) + fuff
    - Structure makes endpoints predictable

### GraphQL

- Easier to hack due to introspection

- **Hit all the buttons, try every feature**
- Look for where the bugs where the impact is highest
    - Payments, login, authentication
- Or where you can bypass protections
    - The website might have protection against XXS but the mobile app might not. i.e. Stored XSS may be protected on the web but not be on mobile. Once injected the bug may trigger on the desktop

## Common vulns in mobile apis

- Same the same on hte web
- Lots of low hanging fruit
- **Broken User level Auth**
    - IDOR - api not checking you own a resource before acting
    - Signs
        - number or uuid (create 2 accounts so you have 2 predictable uuids)
    - How to find
        - If you see id remove all cookies and see if it still works
        - try replacing cookies with other users
        - try replacing ID with others

    **Excessive Data exposure**

    - Information disclosure
    - Signs
        - endpoint returning to much, check that too much data is not being returned and just hidden from the user
        - How to find
            - API enumberation or press all the buttons

    **Broken function level auth**

    - Permission IDOR
        - Can a user do something action that only an admin should
    - Signs
        - Complex permission hierarchy
        - Ids
    - How to find
        - User containers in firefox and log into both users (admin and regular)
        - Do admin actions, repeating each request and change the cookie of the regualr user
        - Autorize can do this automatically

    ### Mobile apis as a bypass

    - Somtimes filters only exist on the web/desktop app
        - clientside and not api validation

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13aa8d48-09bf-429b-b26f-3705af832e18/mobile-api-bypass.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13aa8d48-09bf-429b-b26f-3705af832e18/mobile-api-bypass.png)

## Pentesterlabs

Currently working through the Unix badge. Today I completed:

- Unix - Lab #22: Simple lab demonstrating how to read data and database structure with `psql`
- Unix - Lab #23: Lab demonstrating how to read the contents of a file into a database table
- Unix - Lab #24: Basic instro to SQLite databases

## Portswigger academy

To keep my learning interesting I am also going to start working through the Portswigger academy. I aim to do 2 labs a day.

### 1. SQLi

## Retreiving interesting data

- Once the "recon" has been done and we have an idead of how many columns are returned we can start to exfiltrate our data.

Suppose that:

- The original query returns two columns, both of which can hold string data.
- The injection point is a quoted string within the `WHERE` clause.
- The database contains a table called `users` with the columns `username` and `password`.

In this situation, you can retrieve the contents of the `users` table by submitting the input:

`' UNION SELECT username, password FROM users--`

**[Lab](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables):**

This lab contains an SQL injection vulnerability in the
product category filter. The results from the query are returned in the
application's response, so you can use a UNION attack to retrieve data
from other tables. To construct such an attack, you need to combine some
 of the techniques you learned in previous labs.

The database contains a different table called `users`, with columns called `username` and `password`.

To solve the lab, perform an [SQL injection UNION](https://portswigger.net/web-security/sql-injection/union-attacks) attack that retrieves all usernames and passwords, and use the information to log in as the `administrator` user.

**Solution:**

- Use Burp Suite to intercept and modify the request that sets the product category filter.
- Determine the [number of columns that are being returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) and [which columns contain text data](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text). Verify that the query is returning two columns, both of which contain
text, using a payload like the following in the category parameter: `'+UNION+SELECT+'abc','def'--`.
- Use the following payload to retrieve the contents of the `users` table: `'+UNION+SELECT+username,+password+FROM+users--`
- Verify that the application's response contains usernames and passwords.

## Receiving multiple values from a single column

- You can easily retrieve multiple values together within this single column by concatenating the values together
- Different databases have different string concatinators. See [cheatsheet](https://portswigger.net/web-security/sql-injection/cheat-sheet)

**Lab:**

This lab contains an SQL injection vulnerability in the
product category filter. The results from the query are returned in the
application's response so you can use a UNION attack to retrieve data
from other tables.

The database contains a different table called `users`, with columns called `username` and `password`.

To solve the lab, perform an [SQL injection UNION](https://portswigger.net/web-security/sql-injection/union-attacks) attack that retrieves all usernames and passwords, and use the information to log in as the `administrator` user.

**Solution:**

- Use Burp Suite to intercept and modify the request that sets the product category filter.
- Determine the [number of columns that are being returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) and [**which columns contain text data](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text).** Verify that the query is returning two columns, only one of which contain text, using a payload like the following in the `category` parameter: `'+UNION+SELECT+NULL,'abc'--`
- Use the following payload to retrieve the contents of the `users` table: `'+UNION+SELECT+NULL,username||'~'||password+FROM+users--`
- Verify that the application's response contains usernames and passwords
