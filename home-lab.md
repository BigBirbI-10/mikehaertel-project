# Home Lab & Personal Infrastructure

## Overview

Self-hosted home infrastructure demonstrating enterprise-grade architecture, virtualization, storage management, network security, and AI/ML experimentation at home scale. This lab serves as both a learning environment and production infrastructure for personal projects.

## Network Infrastructure

### Ubiquiti UniFi Ecosystem
- **UniFi Network**: Enterprise-grade networking equipment
  - Centralized management and monitoring
  - VLAN segmentation and network isolation
  - Advanced routing and firewall capabilities
  - Quality of Service (QoS) configuration

- **UniFi Protect**: Video surveillance and security
  - Network video recording (NVR)
  - Camera management and monitoring
  - Security footage storage and retrieval
  - Event detection and alerts

**Skills Demonstrated**:
- Network architecture and design
- Security camera systems and physical security
- Network segmentation and security policies
- Centralized management platforms

## Compute & Virtualization

### Dell PowerEdge T430 Server
Enterprise-class server hardware providing the foundation for virtualized infrastructure.

### Proxmox Virtual Environment
**Hypervisor**: Proxmox VE (KVM-based virtualization)

**Capabilities**:
- Type 1 hypervisor for bare-metal performance
- VM and container (LXC) management
- High availability and clustering capabilities
- Snapshot and backup management
- Resource allocation and monitoring

**Use Cases**:
- Development environment isolation
- Service hosting (including FareScout test environment)
- Infrastructure testing and experimentation
- Multi-OS support (Linux VMs, containers)

**Skills Demonstrated**:
- Virtualization architecture and management
- Resource optimization and capacity planning
- Backup and disaster recovery strategies
- Infrastructure as code concepts

## Storage Infrastructure

### TrueNAS
**Platform**: ZFS-based network attached storage

**Capabilities**:
- Enterprise-grade ZFS filesystem
- Data integrity verification (checksums)
- Snapshot and replication
- SMB/NFS network shares
- RAID configuration and redundancy

**Use Cases**:
- Centralized file storage for home network
- Media storage and streaming
- Backup target for VMs and workstations
- Time Machine backup support
- Development project storage

**Skills Demonstrated**:
- Storage architecture and design
- ZFS administration and tuning
- Network file sharing protocols
- Data protection and redundancy strategies

## Home Automation

### Home Assistant
**Platform**: Open-source home automation hub

**Capabilities**:
- Smart home device integration
- Automation rule creation
- Dashboard and monitoring
- Voice assistant integration
- Custom scripting and workflows

**Skills Demonstrated**:
- IoT device integration
- Automation logic and workflows
- API integration across platforms
- YAML configuration management
- Python scripting for custom components

## AI/ML Infrastructure

### NVIDIA Jetson Nano
**Hardware**: NVIDIA Jetson Nano (ARM-based AI edge computing platform)

**Software Stack**:
- **Ollama**: Local LLM inference server
- **Web Interface**: Browser-based chat interface for LLM interaction
- **Model Support**: Running open-source language models locally

**Capabilities**:
- On-device AI inference
- Privacy-preserving local LLM deployment
- GPU-accelerated model inference
- Self-hosted alternative to cloud AI services

**Use Cases**:
- Private AI experimentation without cloud dependencies
- Learning LLM deployment and inference
- Testing and comparing different open-source models
- Understanding AI infrastructure requirements

**Skills Demonstrated**:
- AI/ML deployment and inference
- Edge computing and resource-constrained environments
- GPU utilization for AI workloads
- Container deployment for AI services
- Privacy-focused architecture decisions

## Integration & Architecture

### Holistic Infrastructure Design
The home lab demonstrates end-to-end infrastructure thinking:

1. **Network Layer**: UniFi provides secure, segmented networking
2. **Compute Layer**: Proxmox enables flexible VM/container deployment
3. **Storage Layer**: TrueNAS provides reliable, redundant data storage
4. **Automation Layer**: Home Assistant orchestrates smart home integration
5. **AI/ML Layer**: Jetson Nano enables local AI experimentation

### Real-World Application
- **FareScout Test Environment**: Proxmox VM running Docker for staging
- **Development Workflows**: Isolated environments for testing
- **Personal Cloud**: Self-hosted alternative to commercial cloud services
- **Learning Platform**: Hands-on experimentation with enterprise technologies

## Skills & Knowledge Demonstrated

### Enterprise Technologies at Home Scale
- Virtualization and hypervisor management
- Enterprise storage systems (ZFS)
- Enterprise networking (UniFi)
- High availability and redundancy concepts
- Backup and disaster recovery

### Modern DevOps & Infrastructure
- Container orchestration (Docker on Proxmox)
- Infrastructure as code principles
- Monitoring and observability
- Resource optimization
- Service deployment automation

### Emerging Technologies
- AI/ML model deployment and inference
- Edge computing and resource optimization
- Privacy-preserving AI architecture
- IoT integration and automation
- Open-source LLM experimentation

### Self-Hosted Philosophy
- Data sovereignty and privacy
- Cost optimization vs. cloud services
- Learning through hands-on management
- Understanding full stack from hardware to application
- Reduced dependency on commercial cloud providers

## Business Value Translation

This home lab directly translates to professional capabilities:

1. **Hybrid Cloud Understanding**: Experience managing on-premises infrastructure mirrors enterprise data center operations
2. **Cost Optimization**: Understanding TCO of self-hosted vs. cloud services
3. **Security Mindset**: Network segmentation, physical security, data protection
4. **Full-Stack Thinking**: From bare metal through application layer
5. **Troubleshooting Skills**: Managing complex, integrated systems builds deep diagnostic capabilities

## Continuous Learning

The home lab serves as a personal R&D environment:
- Testing new technologies before production use
- Experimenting with emerging platforms (local LLMs, containerization)
- Maintaining hands-on technical skills during career transition
- Building practical experience with tools mentioned in job descriptions

---

*This infrastructure demonstrates the ability to architect, deploy, and maintain complex technical systems, translating enterprise IT experience into hands-on homelab experimentation and real-world application hosting.*
