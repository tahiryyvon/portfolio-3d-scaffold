Angular frontend (scaffold)

To run (cmd.exe):

cd /d E:\Perso\portfolio-3d-scaffold\apps\frontend
npm install
npx ng serve --open

Notes:
- This scaffold includes a `SceneComponent` in `src/app/scene` which mounts a Three.js scene.
- The component attempts to GET /api/portfolio to fetch portfolio items from the backend; during dev you may need to proxy or enable CORS on the API (the backend scaffold enables CORS by default).
