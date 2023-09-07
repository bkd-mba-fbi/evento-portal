#!/usr/bin/env bash
# Author Nils Kreinebühl; kreienbuehl@puzzle.ch
#
# usage: ./tagging.sh 1.0.1 test

set -o errexit

declare -r VERSION=${1}
declare -r ENVIRONMENT=${2}
declare -r IMAGE_NAME="evento-portal"

/usr/bin/podman build -t ${IMAGE_NAME}:${VERSION} -t ${IMAGE_NAME}:${ENVIRONMENT} .

# Bedag container registry
# /usr/bin/podman login registry.ci-bedag.ch --creds username:password
# /usr/bin/podman push ${IMAGE_NAME}:test registry.ci-bedag.ch 

# Github Container registry
# export CR_PAT=YOUR_TOKEN
# echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
# podman push ghcr.io/bkd-mba-fbi/:test
