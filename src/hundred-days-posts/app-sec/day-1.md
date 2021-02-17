---
slug: "/day-1"
title: "AppSec: day 1"
short: "Day 1 learning App Sec - Vim skills, new book"
date: "2021-02-15"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["security", "hacking", "hundred-days-of"]
focus: "fundamentals"
---

## Youtube video:

[[youtube: l8iXMgk2nnY]]

- find assets `assetfinder --subs-only [uber.com](http://uber.com)` only passive, not brute force
- `>` `domains`
- prefilter which have http server `cat domains | httprobe | tee hosts`
- Think of Tee like a **T,** like a split, one stream of input split between file and stdout
- `tee -A` is the same as `>>` A for append
- Want to have a poke around - **meg - Good at looking at one path for lots of hosts**
    - This creates a folder for each host and a folder within each for `http` and `https`
- `meg -d 1000  -v /`
- `grep -Hnri [string] *`
    - `-H` show filename in output
    - `-n` line number
    - `-r` recursive
    - `-i` case insensitive
    - `-v` invert
- Result of this grep is not great to work with (whats it like with `rg`?)
- So pipe it in to Vim `grep -Hnri uber-internal * | vim -`
    - `vim -` tells vim to take the input and add it to a buffer
    - We can work on the contenst of the buffer and then return it to the same buffer 🤯
        - `:%!`
            - `:` command
            - `%` represents the current file
            - `!` run shell command
        - `:%! sort -u`
        - `:%!grep -v Content-Sec`
- [GF](https://github.com/tomnomnom/gf) is a wrapper around grep, highly extensible with own regex
- Look for base64 in out `meg` output
    - `gf base64 | vim -`
    - Now we just want the base64 strings - `:%!awk -F ':' '{print $3}'`
        - This `awk` strings says
            - `-F` field separator
            - `'{print $3}'` print 3rd item from each line
- Remove the last `.` at the end of each line
    - search first `/\.$`
    - Then search and replace - if you dont put in a search string Vim will use your last search `:%s///`

- With our list of strings
    - `:%!sort -u` to sort and remove any dupes
    - To run a command on a number of lines use `xargs`
    - `:%!xargs -n1 -I {} sh -c 'echo {} | base64 -d'`
        - `{}` tells `xargs` the we are using `{}` as a placeholder

- Other ways to process all the files from **meg (**from the root of the folder meg created)
    - `find . -type f | http-tool attribs src` find all the attribute src in the html
    - just js files `find . -type f | http-tool attribs src | grep \.js$`
    - all the titles `find . -type f | http-tool tags title | vim -`
        - `:%!sort -u` sort and remove dupes

This script dumps a gits repos whole history:

- To optimise your git history, after some time, git will put all the objects into a pack file. This allows for compressions. But to find them there must be an index.

```bash
#!bin/bash
{
	find .git/objects/pack/ -name "*.idx" | # find all the index files
	while read i:
		do git show-index < "$i" | awk '{print $2}' # print all the object id from the show index command
	done;

find .git/objects/ -type f | grep -v '/pack' | # find all the unpacked objects
awk -F'/' '{print $(NF-1)$NF}'; # Field sep /, concat parts to make object id
} | while read o; do
		git cat-file -p $o; # cat whole file by iobject id
done
```

With a list of urls, you can also use [unfurl](https://github.com/tomnomnom/unfurl) to pull out the interesting bits. With these params, paths etc you have use them to create custom word lists for your target.

## Pentesterlabs

N.B - Pentesterlab labs dont work in Brave

Currently working through the Unix badge. Today I completed:

- Unix - Lab #13: looking at crontab and enc/decoding with openssl
- Unix - Lab #14: looking for backup directory created by root. Once you have that
assume `victim` to get key

The next lab required John the ripper and I did not have Kali installed so installing it and will pick this up again tomorrow
