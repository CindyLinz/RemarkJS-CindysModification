# Remark.js - Cindy's Modification

A green wrapper around remark.js that provides additional features.

These features can be switched on and off individually.

# Features

  + PlainChar:<br>
    We can type any plain charactor by input its unicode in these two formats:
    ```
    CindyLinz \#22909;\#28418;\#20142;
    CindyLinz \#x597D;\#x6F02;\#x4EAE;
    ```

    I need this feature. I got trouble in typing a single backquote (\`) in a fenced codeblock.
    I tried \`, &amp;#96;, &amp;#x60;, \`\`, \\\`.
    The first three gave me a background highlighted effect.
    The last two gave me double backquote and one backslash plus one backquote...

  + SubsImg:<br>
    We can substitute previous displayed images to form a step-wise animation.
    ```
    ![This is the first image](http://image_url)
    --
    !^[This is the second image](http://image_url2)
    --
    !^[This is the third image](http://image_url2)
    ```

    or if there are 2 or more images concurrently
    ```
    ![image1](http://image_url1)
    ![image2](http://image_url2)
    --
    !^^[changed_image1](http://image_url1_next)
    !^[changed_image2](http://image_url2_next)
    --
    !~2[changed_image1](http://image_url1_next_next)
    !~1[changed_image2](http://image_url2_next_next)
    ```

# Usage
We use the original [remark.js](http://remark.js/) this way:
```html
<!doctype html>
<html>
    <head>
        ...
    </head>
    <body>
        <textarea id="source">
            ...
            Our slide source in Markdown syntax
            ...
        </textarea>
        <script src="https://raw.githubusercontent.com/gnab/remark/v0.9.1/out/remark.min.js"></script>
        <script>
            remark.create({... some options ...});
        </script>
    </body>
</html>
```

Now we use Cindy's modification this way:
```html
<!doctype html>
<html>
    <head>
        ...
    </head>
    <body>
        <textarea id="source">
            ...
            Our slide source in Markdown syntax
            ...
        </textarea>
        <script src="https://raw.githubusercontent.com/gnab/remark/v0.9.1/out/remark.min.js"></script>
        <script src="https://raw.githubusercontent.com/CindyLinz/RemarkJS-CindysModification/v0.1/out/remark.min.js"></script>
        <script>
            remark_cindy.create(
                {... some options for original remark.js ...},
                { AnyChar: true, SubsImg: true }
            );
        </script>
    </body>
</html>
```
