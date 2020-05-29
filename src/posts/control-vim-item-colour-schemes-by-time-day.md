---
slug: "/control-vim-item-colour-schemes-by-time-day"
title: "Time controlled colour schemes for Vim and Iterm2"
short: "Want to change you Vim and Item2 colour scheme by the time of day. Here is how I did it."
date: "2020-05-26"
featuredImage: "../images/posts/vim-iterm-colours/header.jpg"
tags: ["vim", "terminal"]
---

If you have read any of my other articles you will know that I live in a terminal. All my work is done in Iterm2, using NeoVim, Tmux and a multitude of other tools. You will probably also know that I have taken the time to get my terminal and Vim looking just how I like it. I have written a theme ([Ariake](https://github.com/jim-at-jibba/ariake-vim-colors)) for both Iterm2 and Vim with light and dark variants.

The reason for the light and dark variants are to help with working through the day into the evening. During the day I find it easier on the eyes to have a light theme. In the evening, a dark is better. But I would rarely remember to make the switch. I figured there must be a way to automate the process. It turned out to be pretty simple.

## Setting up Vim

The update to Vim was super simple. Simply add the following lines to your `init.vim`

```vim
if strftime("%H") < 17
  set background=light
else
  set background=dark
endif
```

This follows the 24hr clock so update the `17` (5 pm) accordingly. I have mine change at around 5 pm. Now every time you openVim the time would be checked and the background colour updated accordingly.

## Setting up Iterm2

This was a little more involved but nothing to hard. Iterm2 gives the user access to a [Python API](https://www.iterm2.com/python-api/). With this, we have access to a huge array of functionality and so we can programmatically update it. In our case, we want to update the colour schema of our profile.

From the menu select _Scripts > New Python Script_ and follow the wizard. It does not matter what you select as we are gonna replace the whole lot anyway. Once you have completed the wizard, open the script and replace the contents with the script below.

```python
#!/usr/bin/env python3.7

import asyncio
import datetime
import iterm2

# Clock time to change colours.
LIGHT_TIME=(7, 0)
DARK_TIME=(17, 0)

# Color presets to use
LIGHT_PRESET_NAME="ariake-light"
DARK_PRESET_NAME="ariake-dark"

# Profiles to update
PROFILES=["Ariake"]

def datetime_after(t, time):
    today = datetime.datetime(t.year, t.month, t.day, time[0], time[1])
    if today > t:
        return today
    # Same time tomorrow
    return today + datetime.timedelta(1)


def next_deadline_after(t):
    light_deadline = datetime_after(t, LIGHT_TIME)
    dark_deadline = datetime_after(t, DARK_TIME)
    print("light {} dark {}".format(light_deadline, dark_deadline))
    if light_deadline < dark_deadline:
        return (LIGHT_PRESET_NAME, light_deadline)
    return (DARK_PRESET_NAME, dark_deadline)

def get_duration():
    now = datetime.datetime.now()
    preset_name, deadline = next_deadline_after(now)
    duration = (deadline - now).seconds
    print("Sleep for {} seconds until {}".format(duration, deadline))
    return duration, preset_name

async def set_colors(connection, preset_name):
    print("Change to preset {}".format(preset_name))
    preset = await iterm2.ColorPreset.async_get(connection, preset_name)
    for partial in (await iterm2.PartialProfile.async_query(connection)):
        if partial.name in PROFILES:
            await partial.async_set_color_preset(preset)

async def main(connection):
    while True:
        duration, preset_name = get_duration()
        await asyncio.sleep(duration)
        await set_colors(connection, preset_name)
        await asyncio.sleep(1)

iterm2.run_forever(main)

```

The only things that need changing are marked with comments. I found the _script console_ handy for debugging the scripts. Once the script is complete you can activate it _Scripts > [you script name]_. If you want it to run automatically, move the script to `$HOME/Library/ApplicationSupport/iTerm2/Scripts/AutoLaunch`. You may need to create this folder.

Now that the scripts are in place you should have a lovely self-changing development environment allowing you to code all day and night 😀.

# Thanks for reading 🙏

If there is anything I have missed, or if there is a better way to do something then please let me know
