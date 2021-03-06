---
slug: "/day-7"
title: "AppSec: day 7"
short: "Day 7 learning App Sec - Nahamsec Bug bounty"
date: "2022-03-06"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

I have taken a couple weeks off due to othe commitments. I realise
that it is not realistic to think that I can dedicate 100 consecutive days
to this. I will do the 100 days but there will be gaps.

## Nahamsec Bug Bounty Course

## Open redirect

- Open redirects happen when the application takes an untrusted input nad redirects the user to an untrusted site or resource
- Impact is usually low unless used to escalate other vulnerabilities
- Some devs add security measures, like trusted lists or untrusted resources but these can sometimes be bypassed if the impimentation is known
- Look in the dev tools for `302` redirects, these may be exploitable

### Example filter bypass

```bash
(allowed)
https://example.com/login/?nextPage=https://google.com

(not allowed)
https://example.com/login/?nextPage=https://evilsite.com

(allowed)
https://example.com/login/?nextPage=https://evilsite.com/?google.com

(my also work)
https://example.com/login/?nextPage=https://google.com@evil.com
```


## XSS

- XSS allows an attacker to execite arbitrary clientside code on a victims broser.
- XSS can be used for phishing, exfiltrating data and account takeovers

### How does it work

- Insert malicous payload
- When the victim visits the page the scrit is executed
- The script performs whatever it was meant to do
- If the victim has special privileges (admin user) then it can be a serious vuln

### Impact

- read/modify/delete content
- steal users cookie or session and gain access to their account
- serve malicious content like phishing

## Types

### Reflected

- payload is injected from the victims request
- Victim must click a malicious link or navigiate to an attacker controller property

### Stored

- paylod is stored server side and can be triggger by a victim with no interaction outside the application

### DOM

- The vulnerability is in the client side code verse teh serverside
- Injection still typically from victims request

### Reflected example

```bash
site.com/page?name=John - Hello, John - // normal request
site.com/page?name=<u>John</u> - Hello, <u>John</u> // No XSS
site.com/page?name=<u>John</u> - Hello, **John** // Possible XSS
```

- Just because we get HTML injection does not mean we have an XSS but there are ways to escalate to XSS
- Look for HTML injection and then try to escalate

### Stored example

- similar to the above but is stored in the DB and executed when rendered

[What does it mean when they say React is XSS protected?](https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected)

## Labs

- When testing XSS have the devtools open to see what is being rendered
- Basic xss `<script>alert(document.cookie)</alert>`
- **understand the context** of where the xss is going. Where is it reflected?
- Escape out of your context if the xss does not fire. i.e If xss is reflected in input field it wont work. So you need to close the input tag and then execute your xss
- Start small, look for html injection and then exploit

Currently working through the Unix badge. Today I completed:

- Unix - Lab #28: Privilege escalation using `less`
  - Use `less` on a known file, then once in less use `:`
    to execute other commands as the user account you are sudoing
- Unix - Lab #29: Privilege escalation using `awk`
  - Read the contents of a file into `awk` by passing it as an arguent
  - Gain a shell by running the `system` command `awk 'BEGIN {system("/bin/bash")}'`
