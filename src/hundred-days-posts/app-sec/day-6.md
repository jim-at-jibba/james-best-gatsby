---
slug: "/day-6"
title: "AppSec: day 6"
short: "Day 6 learning App Sec - zseano methodology"
date: "2022-02-18"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

## Pentesterlabs

Currently working through the Unix badge. Today I completed:

- Unix - Lab #28: Privilege escalation using `less`
  - Use `less` on a known file, then once in less use `:`
    to execute other commands as the user account you are sudoing
- Unix - Lab #29: Privilege escalation using `awk`
  - Read the contents of a file into `awk` by passing it as an arguent
  - Gain a shell by running the `system` command `awk 'BEGIN {system("/bin/bash")}'`
