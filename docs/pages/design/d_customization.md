---
title: Customization
description: The customization options of furl.
---

Customizing your typography, layout and colors helps your web application stand out from the rest.

The customization options available to you may seem limited but affect all of your components and systems, allowing you to consistently tweak every aspect of your application by making very few changes.

<img class="splash-img" src="https://images.unsplash.com/photo-1547845172-50a457530eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1269&q=80" alt="Photo by Matthew T Rader on Unsplash">

### Customization guidelines

**furl** allows you to easily tweak any of the variables described in the previous sections, by changing their values in your `:root` element. Make sure that your custom rules are included last (e.g. last CSS file in your HTML `<head>` element) to override any of **furl**'s defaults. 

An example of variable customization is shown below:

```css
:root {
  --font-a: Arial;
  --ts-100p: 15px;
  --ls-100p: 14px;
  --interface-gray-500: #8897A5;
}
```
