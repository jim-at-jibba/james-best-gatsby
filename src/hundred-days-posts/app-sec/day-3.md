---
slug: "/day-3"
title: "AppSec: day 3"
short: "Day 3 learning App Sec - Finding first bug, start Portswigger path"
date: "2021-02-17"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

## Youtube video:

[[youtube: _y-iz3itch0]]

- Technical skills
    - burp
    - the idea of what bugs you can find
    - How the internet works
- you dont need to be an expert
- Dont just go from program to program looking for a single bug type. Get to know the target.
- Look for the **SIGNS of bugs**
    - IDs → IDORS
    - Ecommerce/complex logic → Business logic
    - reflected output → XSS, profile page
    - Open scope/large API/mobile app → information disclosure
    - Mobile app → client side validation only (xss+sqli)
- As you learn always think about what the sign of a bug could be
- When ever you watch/read/listen to something
    - What was the sign
    - How was it exploited
    - Where can I find more info
- Only focus in depth when you need to
- Learn how the internet works
    - How do web apps work
- Dont rely on tools
    - Do the manual testing, this is what sets you apart. Your brain
- Focus on interactive webistes
    - Easier to hack
    - Look for interagivity
- **Think features - test all the features**
    - When you attack a website, think about the features it has
    - Registration? Test that
    - Buying a product? Test that
- **Play to your strengths**
    - Consider what you already know and apply it
- Dont constantly switch programs constantly
    - Get a deep understanding of a program, get to know all the features of a program

- Pick you program
- Pick the asset
    - look for interactivity
- Focus on features
- Figure out impact and write a report
    - Connect to the businesses needs


## Pentesterlabs

Currently working through the Unix badge. Today I completed:


    Unix - Lab #17: Find admin password for Tomcat server
    Unix - Lab #18: Get the admin password from the MYSQL database
        lots of databases are unsecured and can be accessed with no password mysql -u root
    Unix - Lab #19: Same as the previous but with a password


## Portswigger academy

To keep my learning interesting I am also going to start working through the Portswigger academy. I aim to do 2 labs a day.

### 1. SQLi

- **Retrieving hidden data**

  - By injecting a comment into the query we  an expose more data than was intended.
  - Consider an app that allows the filtering of products through an api [`https://insecure-website.com/products?category=Gifts`](https://insecure-website.com/products?category=Gifts)
  - This query param is used in the SQL query `SELECT * FROM products WHERE category = 'Gifts' AND released = 1`
  - the `released` part is only showing items that are marked as released.
  - If we changed the api to `?category=Gifts'--` the resulting SQL query looks like this `SELECT * FROM products WHERE category = 'Gifts'--' AND released = 1`, the `--` acts as a comment and ends the query. This means no released filter is added showing all items

- **Subverting application logic**

  - By inject a comment we can short circuit the the `WHERE` statement
  - Consider an app that allows a user to login with `username` and `password`
  - this would result in a query like `SELECT * FROM users WHERE username ="name" AND password = "password"`
  - But we can inject a comment and just log in with a username `name'--` results in  `SELECT * FROM users WHERE username ='name'--' AND password = ''`
