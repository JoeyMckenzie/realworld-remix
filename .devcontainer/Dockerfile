FROM mcr.microsoft.com/devcontainers/typescript-node:0-18-bullseye

# enable pnpm via coreback
RUN corepack enable

# install our playwright dependencies
RUN pnpm exec playwright install --with-deps