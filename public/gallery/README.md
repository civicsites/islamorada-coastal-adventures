# Gallery photos

Photos in this folder (including subfolders) appear on `/gallery` after rebuilding and deploying the website. Photos are shown together with continuous Florida Keys Adventure numbering. Supported files: JPG, PNG, WebP, AVIF.

To import a folder of originals on macOS, including HEIC photos, run from the project root:

```sh
node scripts/import-gallery.mjs '/absolute/path/to/photos'
```

The importer preserves folder names, creates WebP copies up to 1920px, corrects orientation, and strips embedded metadata. Original files are left in place. Video files are skipped. Files are processed individually; existing outputs for matching names are replaced. Removing originals does not remove previously imported copies.

The initial import came from the three date folders in the project's `photos` directory. The three MOV files remain with the originals.
