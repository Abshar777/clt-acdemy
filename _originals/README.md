# Original (uncompressed) images — backup

These are the **full-resolution originals** of images that were compressed/resized
for the live site (page-speed optimisation).

- The **served** versions live in `public/` (compressed, smaller).
- This `_originals/` folder is **outside `public/`**, so Next.js does **not** serve
  it — it ships in the repo as a backup only.
- Folder structure mirrors `public/` (e.g. `_originals/public/gallery/img7.jpg`
  is the original of `public/gallery/img7.jpg`).

## To restore an original to the live site
Copy it back over the served version, e.g.:

```bash
cp _originals/public/gallery/img7.jpg public/gallery/img7.jpg
```

(Then re-optimise if needed before deploying.)
