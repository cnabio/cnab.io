---
title: Compatible Registries
description: Understanding which OCI registries work with CNAB 
---

Cloud Native Application Bundles are new, and support for storing anything
other than container images in a registry is inconsistent. The community has
tested a bunch of registries for compatibility with CNAB and so far here is what
we have found.

Registries that are [OCI compliant][oci-spec] should work with CNAB just fine. CNAB doesn't
have additional requirements beyond that. Each registry below has been verified
using a CNAB tool that uses the [cnab-to-oci] library.

| Registry | Compatible |
| -------- | --------------- |
| **Azure Container Registry (ACR)** | **Yes** |
| Artifactory | **Yes** |
| **Docker Hub** | **Yes** |
| **DigitalOcean Container Registry** | **Yes** |
| **Amazon Elastic Container Registry (ECR)** | [Yes*](#notes) |
| **Google Artifact Registry** | **Yes** |
| Google Cloud Registry (GCR) | No | 
| **GitHub Container Registry (GHCR)** | **Yes** | 
| GitHub Packages | No |
| **Harbor 2** | **Yes** |
| Nexus | No |
| Quay | No |
 
 If you have tried out a registry and have an update for us, [please
 let us know](https://github.com/cnabio/cnab.io/issues/new)!
 
##### Notes
* Amazon Elastic Container Registry (ECR) requires that you create the repository for the invocation image and the bundle before pushing.

 [cnab-to-oci]: https://github.com/cnabio/cnab-to-oci
 [oci-spec]: https://github.com/opencontainers/distribution-spec/blob/master/spec.md
 
