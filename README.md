![Theme Screenshot](https://raw.githubusercontent.com/deislabs/cnab.io/master/themes/cnab/img/screenshot.png?token=AAp4ctyXT6Xuaer1Vm8SXT0HscNhS5WGks5cBvT9wA%3D%3D)

A simple website for the [CNAB spec](https://github.com/deislabs/cnab-spec).

# Editing Content

Duffle.sh is a single page, static site. The page contents can be edited at `themes/duffle/layouts/index.html`. Post, tag, category taxonomy is available in hugo should we want to expand in the future.

# Notes

* built with the [Hugo](https://gohugo.io/) static site generator
* custom duffle theme uses [Paper](https://github.com/nanxiaobei/hugo-paper/) as a base, with [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/) on top and the [CNAB custom sass](https://github.com/deislabs/cnab.io/tree/master/themes/cnab)
* uses Gulp for asset pipelines
* deployed to [Netlify](https://app.netlify.com/) via merges to master. @carolynvs is admin of this. 
* metrics tracked via Bing and Gaug.es

# Development

Install the dependancies - first [install Hugo](https://gohugo.io/getting-started/installing/), and then the packages:

```
npm install gulp-cli -g
npm install
gulp && hugo serve
```

`hugo serve` will run the site locally at [localhost:1313](http://localhost:1313/)
