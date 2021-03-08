#! /usr/bin/env sh
set -eux

names=$(cat <<"EOF"
alpine
clean-cache
install-production
simple
staged
staged-debian-slim
staged-distroless
EOF)

for name in $names; do
  docker build -f "Dockerfile.${name}" -t "nextjs-docker:${name}" .
done

docker image ls nextjs-docker
