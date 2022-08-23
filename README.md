# TheSportsClub

## Project setup

1. Pull repo.
2. `yarn configure:hooks` OR `yarn configure:hooks:windows`.
3. Ask for env variables.
4. Put env vars in `.env` file in root directory.
5. Try to launch frontend by calling `yarn start:frontend:dev`.
6. Try to launch backend by calling `yarn start:backend:dev`.

## PR convention

1. Each branch should be created from `develop` branch.
2. Naming convention should be done in the next way `<app-part-type>/<task-type>/<task-id>/<task-name>` Example: backend/feature/0/some-task
3. Commit naming convention `<sub-task-type>: Think that you have done in this task`

## Codes style

### Frontend

1. Each file name in `src/` folder should be in kebab case `name-of-component.component.tsx`.
2. Each file should have type after name `.component | .container | .styled | .service | .provider | .util | .type`.
3. Place all shared code in `common` folder.

### Backend

1. Each file name in `src/` folder should be in kebab case `name-of-component.controller.ts`.
2. Each file should have type after name `.module | .service | .guard | .pipe | .provider | .util | .type`.

## Commands

`start:backend:dev` - Run your frontend  
`start:frontend:dev` - Run your backend  
`lint:fix` - Fix All prettier lint in project
