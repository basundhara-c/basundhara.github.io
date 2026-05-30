---
title: "Reverse Tunneling in Envoy Proxy"
date: "May 2026"
readTime: "7 mins"
summary: "How reverse tunnels in Envoy reduce exposed network attack surfaces for secure cross-cluster and hybrid-cloud communication."
tags: ["Envoy", "Network Security", "Zero Trust", "Open Source"]
---

## Overview

Reverse tunneling in Envoy Proxy solves a common problem in hybrid-cloud and cross-cluster systems: services often need to communicate across network boundaries, but opening inbound ports expands the attack surface.

The reverse tunnel design inverts the traditional client-server socket model. A protected service behind a firewall or NAT initiates a secure outbound tunnel, allowing cloud-side systems to communicate without requiring direct inbound exposure.

## Contribution

Basundhara led the design and implementation of reverse tunnel support while at Nutanix and contributed the feature upstream to Envoy Proxy. The feature was introduced in Envoy 1.36 and is now part of the open-source Envoy project. She remains active in Envoy as a contributor and code owner.

The work combined datapath engineering, security architecture, and production constraints:

- secure inbound connectivity from cloud to on-prem workloads
- cross-cluster service communication without exposing inbound ports
- integration with Envoy's proxy architecture
- production use in enterprise hybrid-cloud environments
- upstream contribution to a widely adopted open-source networking proxy

## Why It Matters

Envoy sits in the critical path for modern cloud-native networking. Features that reduce exposed attack surfaces in Envoy can improve the security posture of systems far beyond a single company.

Reverse tunnels align with zero-trust networking principles because protected workloads do not need to accept unsolicited inbound traffic. Instead, they can establish outbound connectivity and maintain more controlled communication paths.

## Public References

- Envoy reverse tunnel documentation: [envoyproxy.io/docs/envoy/latest/configuration/other_features/reverse_tunnel](https://www.envoyproxy.io/docs/envoy/latest/configuration/other_features/reverse_tunnel)
- Envoy GitHub issue: [github.com/envoyproxy/envoy/issues/33320](https://github.com/envoyproxy/envoy/issues/33320)
- Envoy CODEOWNERS: [github.com/envoyproxy/envoy/blob/main/CODEOWNERS](https://github.com/envoyproxy/envoy/blob/main/CODEOWNERS)
- Nutanix technical series on secure cross-cluster communication: [Part 3](https://www.nutanix.com/tech-center/blog/designing-secure-cross-cluster-communications-for-nutanix-part3-reverse-tunnel-acceptance#architecture)
- Nutanix technical series on life of a data request: [Part 4](https://www.nutanix.com/tech-center/blog/designing-secure-cross-cluster-communications-for-nutanix-part4-life-of-a-data-request)

## Writing Direction

The strongest public writing angle is technical and architectural:

1. Start with the hybrid-cloud security problem.
2. Explain why opening inbound ports is risky.
3. Show how reverse tunnels change the connectivity model.
4. Explain the Envoy integration at a systems level.
5. Close with the broader zero-trust and open-source infrastructure impact.
