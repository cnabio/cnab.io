![Theme Screenshot](https://raw.githubusercontent.com/cnabio/cnab.io/master/themes/cnab/img/screenshot.png?token=AAp4ctyXT6Xuaer1Vm8SXT0HscNhS5WGks5cBvT9wA%3D%3D)

A simple website for the [CNAB spec](https://github.com/cnabio/cnab-spec).

# Editing Content

cnab.io is static site. The landing page content can be edited at `themes/cnab/layouts/index.html`, and the rest under `/contents`. Post, tag, category taxonomy is available in hugo should we want to expand in the future.

# Notes

* built with the [Hugo](https://gohugo.io/) static site generator
* custom cnab theme uses [Paper](https://github.com/nanxiaobei/hugo-paper/) as a base, with [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/) on top and the [CNAB custom sass](https://github.com/cnabio/cnab.io/tree/master/themes/cnab)
* uses Gulp for asset pipelines
* deployed to [Netlify](https://app.netlify.com/) via merges to master. @carolynvs is admin of this. 
* metrics tracked via Bing and Gaug.es

# Development

Install the dependencies - first install [Hugo](https://gohugo.io/getting-started/installing/)
and [Yarn](https://classic.yarnpkg.com/en/docs/install) - and then the packages:

```
yarn global add gulp-cli
yarn install
gulp && hugo serve
```

`hugo serve` will run the site locally at [localhost:1313](http://localhost:1313/)
