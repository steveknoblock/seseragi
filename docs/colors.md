# Seseragi Colors

```CSS
--seseragi-text-color: #000; /* Default text color */
--seseragi-purple: #6D4F91;
--seseragi-gray: #eee;
--seseragi-medium-gray: #777;
--seseragi-dark-gray: #444;
--seseragi-white: #fff;
--seseragi-black: #000;
--seseragi-blue: #3377AA;
```

Thinking about how to organize colors

One approach is defining colors then using the colors to define a color role

```CSS
--seseragi-black: #000;
--body-text-color: var(--seseragi-black);
--heading-text-color: var(--seseragi-black);
```

