NestJS API (scaffold)

To run (cmd.exe) using the online Neon database

1) Copy the example env and use the hosted Neon DB (the repo already contains Neon example credentials in `.env.example`):

	cd /d E:\Perso\portfolio-3d-scaffold\apps\api
	copy .env.example .env
	npm install
	npx prisma generate
	npx prisma db push
	npm run prisma:seed
	npm run start:dev

The API will listen on http://localhost:3000
Endpoints:
- GET /portfolio
- GET /portfolio/:id
- POST /portfolio
- DELETE /portfolio/:id

DB connection is read from environment variables (see `.env` copied from `.env.example`). This scaffold defaults to using the online Neon DB. Replace `DATABASE_URL` in `.env` if you need to use a different database.
