# Icons

## Exporting SVG icons from Figma

1. Export wrapping layer. Not the vector itself. This will add some whitespace around the icon which makes it easier to align icons in the app.
2. We use the same names for our icons as in Figma (unless we have a good reason not to). That way you don't have to search which name to use when you are building a component.

## Adding/updating icons in IcoMoon

1. Open Safari (Chrome might remove the inner paths of compound paths when uploading SVG files to IcoMoon)
2. Go to https://icomoon.io/app/#/projects and import project from `assets/icons/selection.json`
3. To add one or more icons: click _Import Icons_ and select one or more SVG files
4. Check the alignment of the new/updated icons
5. Remove any colors from the icon
6. Select all icons, and click _Generate Font_
7. Check if the names of the icons are correct and make sure there are no duplicate icons
8. Click _download_ and extract the `.ttf` font file and `selection.json` from the `icomoon.zip`
9. Copy the `icomoon.ttf` file to `assets/icons`
10. Copy the `selection.json` file to `assets/icons`
11. Update the `app/components/Icon/IconName.ts` file. The best and safest way to do this is to extract the names from the `selection.json` by running:

```shell script
yarn icons:update
```

## Editing icons in IcoMoon

SVG icons sometimes contain too much whitespace on the sides. This can be fixed following these steps:

1. Go to https://icomoon.io/app/#/projects and import project from provided selection.json
2. Click edit (pencil icon) button and then the icon
3. _Canvas/Alignment -> Square Canvas -> Align to Center_
   - Note that some icons such as chevrons and arrows sometimes have a different visual center point: the tip of the arrow should be a bit further from the center. This is usually a very subtle difference of only 1, 2 or 3 pixels (depending on the scale), but it will feel more natural.
4. _Scale -> Fit to Canvas_
5. _Color -> Remove Color_
6. _Generate Font -> Download_
7. You'll also need to import the `.ttf` font file and `selection.json` into your project, following the instructions above.

## Troubleshooting IcoMoon

- Error in IcoMoon: `"Strokes get ignored when generating fonts. You can convert them to fills to prevent this"`.
  - Send a message to the designers and ask them to convert the strokes to outlines. You could link this URL to help them if needed: https://icomoon.io/#docs/stroke-to-fill
- If you see fills where you expect cutouts (e.g. you expect a donut shape, but you see a filled circle), then you probably have an issue related to either compound paths to clipping/opacity masks.
  - Use Safari to import the icons to IcoMoon. If that doesn't work out: contact the designers for help.
