# portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ba9e79a-5b37-459c-937a-4ad3c5389eb3/deploy-status)](https://app.netlify.com/sites/jeremyfourna/deploys)

My portfolio

## Build

`eleventy --formats=njk,css --watch --serve`

## Pre-commit hook

Add this code at the beggining of the `pre-commit.sample` file.

```
rm -r _site
eleventy --formats=njk,css
git add _site/
```