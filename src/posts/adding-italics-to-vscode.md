---
slug: "/adding-italics-support-to-your-favourite-vscode-theme"
title: "Adding italics support to your favourite VSCode theme"
short: "If you are anything like me you spend time getting your development environment just right. I mean, why not."
date: "2019-09-24"
featuredImage: "../images/posts/italics-vscode/italics-vscode-header.png"
tags: ["productivity"]
---

If you are anything like me you spend time getting your development environment just right. I mean, why not. You are staring at it for many hours a day. It should be just how you like it.

I live in VSCode, it used to be NeoVim but VSCode typescript support is far superior so I made the full time switch about a year ago. I am one of those people that use a font ([Dank Mono](https://dank.sh/)) with ligatures and an italic variant, and I want to get all the benefits of those features.

All VSCode themes support ligatures as that is down to your editor. But what do you do it your favourite theme doesn't support italic fonts?

Who would not want italic variant? It so pretty!

![Pretty](https://media.giphy.com/media/l4HohoX8ZsPIJwVxe/giphy.gif)

It turns out it is super easy. There is a setting for pretty much everything is VSCode. This include changing how your theme treats certain parts of your code.

To open the settings (on a mac) press **cmd + ,** and then click this button in the top corner of the tab

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/cmf11wn9dlbikmnj240z.png)

First we need to add the `"editor.tokenColorCustomizations"` property to our settings file. We then add the name of our theme as a key. This is pretty great as it means that we can target different themes with different italic settings.

```json
"editor.tokenColorCustomizations": {
    "[Nord]": {
      "textMateRules": []
    }
}
```

We are now set up to target different parts of our code. The structure of this is as follows:

```json
{
  "scope": "emphasis",
  "settings": {
    "fontStyle": "italic"
  }
},
```

The **scope** is what we are targeting and the settings are how we want to effect our chosen scope. Bare in mind that you can also change other settings here, like font weight, color etc but we are only concerned with italicising specific parts of our code.

Now I am not going to go through each of my settings but included is what I find works for me.

```json
"editor.tokenColorCustomizations": {
    "[Nord]": {
      "textMateRules": [
        {
          "scope": "emphasis",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "strong",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "entity.other.attribute-name",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.underline",
          "settings": {
            "fontStyle": "underline"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.heading",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.type",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.modifier",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "String interpolation",
          "scope": [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "keyword.control",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.logical.python"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "this.self",
          "scope": "variable.language",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#ff5874"
          }
        },
        {
          "name": "@Decorator",
          "scope": ["meta.decorator punctuation.decorator"],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": ["punctuation.definition.comment", "comment"],
          "settings": {
            // "foreground": "#ff5874",
            "fontStyle": "italic"
          }
        }
      ]
    },
}
```

I hope this was useful to others. I love being able to choose any theme I want and easily adjust it just how I like.

# Thanks for reading 🙏

If there is anything I have missed, or if there is a better way to do something then please let me know
