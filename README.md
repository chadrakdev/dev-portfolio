# Developer Portfolio

[![Deploy](https://github.com/chadrakdev/dev-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/chadrakdev/dev-portfolio/actions/workflows/deploy.yml)

[View portfolio](https://chadrak.dev)

A minimalist developer portfolio built with **React**, **TypeScript**, and **Material UI**, bundled with Vite. This project essentially serves as an online CV, showcasing work history, personal projects, and contact information.

## Technologies

| Technology   | Version |
| ------------ | ------- |
| React        | 19      |
| React Router | 7       |
| Material UI  | 6       |
| TypeScript   | 5.7     |
| Vite         | 6       |

## Deployments

CI/CD is handled entirely through GitHub Actions — the **PR Checks** workflow runs a build on every pull request to validate changes before merge, and then the **Build, Test and Deploy** workflow builds and ships to **Netlify** automatically on every push to `main`.

## Misc

Inspired by Mark Horn's portfolio built with Astro, [see here](https://markhorn.dev/).
