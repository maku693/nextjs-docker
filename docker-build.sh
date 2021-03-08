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

docker images nextjs-docker --format "table {{.Tag}}\t{{.Size}}" | sed -e '1d' | sort -k2 -h -r
