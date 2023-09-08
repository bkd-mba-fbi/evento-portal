#!/usr/bin/env bash
# Author: Nils Kreienbühl; kreienbuehl@puzzle.ch
#
# usage: ./container/push.sh


# Bedag container registry
# /usr/bin/podman login registry.ci-bedag.ch --creds username:password
# /usr/bin/podman push ${IMAGE_NAME}:test registry.ci-bedag.ch 

# Github Container registry
export CR_PAT=${1}
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
podman push ghcr.io/bkd-mba-fbi/:test
