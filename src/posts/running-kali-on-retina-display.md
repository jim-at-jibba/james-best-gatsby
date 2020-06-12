---
slug: "/running-kali-on-retina-display"
title: "Running a Kali VM on a retina display with zero lag"
short: "Kali super laggy on your retina display Mac? Lets fix it"
date: "2020-06-12"
featuredImage: "../images/posts/kali-mac-screen/kali-header.jpg"
tags: ["productivity", "kali", "infosec"]
---

This weeks post is more of a tip than an article but it is something I recently came across and thought it might help others.

In my free time, I like to learn about hacking and often spend my time completing CTFs. Most of the time I will use a distro like [Kali](https://www.kali.org/) as it is quick to set up and has all the tools that I am likely to need. Kali Linux is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing.

I have always run Kali in a virtual machine (VM) in Virtualbox and I had never had any issues.

But when I installed it on my new (to me) 2019 MacBook Pro, there was so much lag that it was pretty much unusable. Bit if I ran it on my second display, a non-retina AOC 27in screen it ran fine. It boiled down to it being run on a retina display.

After a bit of digging, I found [this thread](https://forums.virtualbox.org/viewtopic.php?f=8&t=93113) which seemed to be describing a similar situation to mine.

So, now I knew it was an issue with the pixel density of my display, I needed to find a program that could change it. There were several options but [EasyRes](https://apps.apple.com/app/easyres/id688211836?ls=1&mt=1) seemed to fit the bill and was free.

![EasyRes](../images/posts/kali-mac-screen/EasyRes+1.1+Yosemite.png)

With EasyRes installed I was able to play around with various screen resolutions and densities to find the sweet spot and found that 1440 x 900 at standard resolution (1x) seems to work great. I am sure you could push it a little further but I did not need to, this worked fine.

Off the back of this issue, I also explored some other all-purpose infosec distros and found [Parrot OS](https://parrotlinux.org/). I think I am in love. It's so lightweight. I run like a dream without the need for EasyRes, has all the same tools as Kali and looks stunning. So will I change? I am not sure. Parrot seems to do some strange things with network adapter names that make doing wireless hacking stuff a real pain. Other than that I am sold. Watch this space for a future update.

# Thanks for reading 🙏

If there is anything I have missed, or if there is a better way to do something then please let me know.

Check out our software focused podcast - [Salted Bytes](https://open.spotify.com/show/7IdlgpiDfYcOdCn57mPLvH?si=X1ArfHvqQXSOAfc1h7Y_Eg)