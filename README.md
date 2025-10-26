Portfolio 3D (Angular + Three.js) + NestJS + PostgreSQL

Overview
- This repository is a scaffold for a simple portfolio page using Angular (frontend) with a Three.js scene, a NestJS backend providing portfolio data, and PostgreSQL as the database (via Docker).

What I created
- apps/frontend: Angular app source (components + Three.js scene component)
- apps/api: NestJS backend (TypeORM config + portfolio entity + CRUD endpoints)
- docker-compose.yml: Postgres service for local development
- README with exact cmd.exe commands to finish setup and run everything locally

Notes
- I scaffolded the source files so you don't need the CLI to generate files. You still need to install dependencies locally.
- On Windows use cmd.exe (Run as Administrator when needed) — the commands below are cmd-safe.

Quick start (cmd.exe)
1) Open cmd.exe and cd to this folder:

    cd /d E:\Perso\portfolio-3d-scaffold

1) Use the online (Neon) database (recommended)

This scaffold is preconfigured to use a hosted Neon Postgres instance. To run the API using the online database:

    cd /d E:\Perso\portfolio-3d-scaffold\apps\api
    copy .env.example .env
    npm install
    npx prisma generate
    npx prisma db push
    npm run prisma:seed
    npm run start:dev

The API will be available at http://localhost:3000 and will connect to the online Neon DB using `DATABASE_URL` from `.env`.

2) Start the frontend (new terminal)

    cd /d E:\Perso\portfolio-3d-scaffold\apps\frontend
    npm install
    npx ng serve --open

Visit http://localhost:4200 to see the portfolio page powered by Three.js.

If you prefer to install Angular CLI globally instead of npx (optional):

    npm install -g @angular/cli

Development notes
- Backend uses TypeORM and environment variables from .env (see apps/api/.env.example). If you need Prisma instead I can convert.
- Frontend includes a simple Angular component `SceneComponent` which mounts a Three.js scene and shows placeholder portfolio tiles fetched from the backend.

If you want, I can:
- Run dependency installs and start servers for you (requires resolving PowerShell policy or using cmd.exe)
- Convert backend to Prisma
- Add authentication and admin UI to add/edit portfolio items

Enjoy — tell me which part to iterate on next (frontend visuals, backend model, DB seeds, or Nx integration).
