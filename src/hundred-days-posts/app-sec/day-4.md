---
slug: "/day-4"
title: "AppSec: day 4"
short: "Day 4 learning App Sec - Finding first bug, start Portswigger path"
date: "2021-02-18"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

## Youtube video:

[[youtube: hmlkUYJ9MFw]]

- Make a checklist of things you want from a program
    - Whats in scope
    - Large vs small scope
    - Public vs private
- play to your strengths

## Pentesterlabs

Currently working through the Unix badge. Today I completed:

  - Unix - Lab #20: Log in with the system mysql user and get the root password. This then needs to be cracked
  - Unix - Lab #21: Use the `load_file()` function to load file with password

## Portswigger academy

To keep my learning interesting I am also going to start working through the Portswigger academy. I aim to do 2 labs a day.

### 1. SQLi

- **UNION attacks**

- Started learning about union attacks

It is possible to retrieve data from other tables by leveraging a UNION attack. This is done by executing one or more additional `SELECT` queries and appending the results to the original query

For example, if an application executes the following query containing the user input "Gifts":

`SELECT name, description FROM products WHERE category = 'Gifts'`

then an attacker can submit the input:

`' UNION SELECT username, password FROM users--`

This will cause the application to return all usernames and
passwords along with the names and descriptions of products.

**For a UNION attack to work:**

- the queries must return the same number of queries
- the data types in each column must be compatible between the individual queries

To carry out a UNION attack you need to ensure these requirements are met. This isdone by figuring out:

- How many columns are returned in the original query
- Which columns returned from the original query are of a suitable data type to hold the results from the injected query?

## Determining the number of columns required for sqli UNION attack

There are 2 ways of determinng the number of columns are returned from the original query.

### Option 1:

- Inject a series of `ORDER BY` clauses.
- `ORDER BY` can be refered to by there index. You can increment the index until you get an error.
- Lets assume the inject point is a quoted string in the `WHERE` clause of the original query. You would add:

    ```bash
    ' ORDER BY 1--
    ' ORDER BY 2--
    ' ORDER BY 3--
    etc
    ```

- Once the number exceed the the number of columns you should an error `The ORDER BY position number 3 is out of range of the number of items in the select list.`
- The error might not be returns and you will need to look for differences in response type by the application

### Option 2:

- Submitting a series of `UNION SELECT` payloads with  different numbers of null values

```bash
' UNION SELECT NULL--
' UNION SELECT NULL,NULL--
' UNION SELECT NULL,NULL,NULL--

```

- If the number of null values do not match `All queries combined using a UNION, INTERSECT or EXCEPT operator must have an equal number of expressions in their target lists.`

**[Lab](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns):**

This lab contains an SQL injection vulnerability in the
product category filter. The results from the query are returned in the
application's response, so you can use a UNION attack to retrieve data
from other tables. The first step of such an attack is to determine the
number of columns that are being returned by the query. You will then
use this technique in subsequent labs to construct the full attack.

To solve the lab, determine the number of columns returned by the query by performing an [SQL injection UNION](https://portswigger.net/web-security/sql-injection/union-attacks) attack that returns an additional row containing null values.

**Solution:**

- Use Burp Suite to intercept and modify the request that sets the product category filter.
- Modify the `category` parameter, giving it the value `'+UNION+SELECT+NULL--`. Observe that an error occurs.
- Modify the `category` parameter to add an additional column containing a null value: `'+UNION+SELECT+NULL,NULL--`
- Continue adding null values until the error
disappears and the response includes additional content containing the
null values.

> The reason for using NULL as the values returned from the injected SELECT query is that the data types in each column must be compatible between the original and the injected queries. Since NULL is convertible to every commonly used data type, using NULL maximizes the chance that the payload will succeed when the column count is correct.

### Finding columns with useful data types

- Generally the interesting data you want to receive in your attack will be in string form so you need to find one or more columns in the original query whose data type is or is compatible with string
- Having already determined the number of columns. You can test what the columns returns as follows

```bash
' UNION SELECT 'a',NULL,NULL,NULL--
' UNION SELECT NULL,'a',NULL,NULL--
' UNION SELECT NULL,NULL,'a',NULL--
' UNION SELECT NULL,NULL,NULL,'a'--
```

- If its not compatitble then you will get an error like this `Conversion failed when converting the varchar value 'a' to data type int.`

**[Lab](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text):**

This lab contains an SQL injection vulnerability in the
product category filter. The results from the query are returned in the
application's response, so you can use a UNION attack to retrieve data
from other tables. To construct such an attack, you first need to
determine the number of columns returned by the query. You can do this
using a technique you learned in a [previous lab](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns). The next step is to identify a column that is compatible with string data.

The lab will provide a random value that you need to make
appear within the query results. To solve the lab, perform an [SQL injection UNION](https://portswigger.net/web-security/sql-injection/union-attacks)
 attack that returns an additional row containing the value provided.
This technique helps you determine which columns are compatible with
string data.

**Solution:**

- Use Burp Suite to intercept and modify the request that sets the product category filter.
- Determine the [number of columns that are being returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns). Verify that the query is returning three columns, using the following payload in the `category` parameter: `'+UNION+SELECT+NULL,NULL,NULL--`
- Try replacing each null with the random value provided by the lab, for example: `'+UNION+SELECT+'abcdef',NULL,NULL--`
- If an error occurs, move on to the next null and try that instead
