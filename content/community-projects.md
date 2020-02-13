---
title: Community Projects
description: Community projects and contributions to the CNAB ecosystem
---

Looking to get started with CNAB or maybe build on top of an existing project?
Here are some open-source projects and SDKs for you to use, or take a look at the
[CNAB community repository][cnab-community] for additional assets that you can 
use in your own project.

---

# Tools

## Duffle
<a href="https://duffle.sh" alt="duffle"><img align="right" src="/img/duffle.svg" width="64px" /></a>

Duffle is the reference implementation of the CNAB specification. It
provides a comprehensive mapping of _all_ features of the specification, serving
both as a tool to install and manage bundles, and author bundles at a low level.

## Porter
<a href="https://porter.sh" alt="porter"><img align="right" src="/img/porter.png" width="64px" /></a>

Porter provides a declarative authoring experience with composable bundles that lets
you use reuse existing scripts and tools such as Helm, Terraform, Kubernetes, and Azure.

## Docker App
<a href="https://github.com/docker/app" alt="docker"><img align="right" src="/img/docker.png" width="144px" /></a>

A Docker CLI Plugin to configure, share and install applications:

* Extend Compose files with metadata and parameters.
* Re-use same application across multiple environments.
* Multi-orchestrator installation.
* Push/Pull/Promotion/Signing supported for application, with same workflow as images.

---

# SDK
Just because you see one already listed for your language, don't let that hold you back!
Feel free to contribute to that SDK, or start your own.

## Go
_We are currently working on extracting a Go SDK out of the [Duffle codebase][duffle-pkg]._

## .NET
* [CNAB.NET](https://github.com/cnabio/cnab-netstandard)

## Python
* [CNAB](https://github.com/garethr/pycnab)

---

Have you written an SDK or tool that works with the CNAB spec? Submit a PR
to <https://github.com/cnabio/cnab.io> and we will list it here!

[cnab-community]: https://github.com/cnabio/community
[duffle-pkg]: https://github.com/cnabio/duffle/tree/master/pkg