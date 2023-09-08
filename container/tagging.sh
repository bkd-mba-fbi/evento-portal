#!/usr/bin/env bash
# Author Nils Kreinebühl; kreienbuehl@puzzle.ch
#
# usage: ./retagging.sh

set -o errexit

declare -r BASE_TAG="test"
declare -r NEXT_TAG="production"
declare -r IMAGE_NAME="evento-portal"

/usr/bin/podman pull ${IMAGE_NAME}:${BASE_TAG}
/usr/bin/podman tag ${IMAGE_NAME}:${BASE_TAG} ${IMAGE_NAME}:${NEXT_TAG}

# Bedag container registry
# /usr/bin/podman login registry.ci-bedag.ch --creds username:password
# /usr/bin/podman push ${IMAGE_NAME}:test registry.ci-bedag.ch 

# Github Container registry
# export CR_PAT=YOUR_TOKEN
# echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
# podman push ghcr.io/bkd-mba-fbi/:test
