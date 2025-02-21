# turboplant back

The **turboplant back** is an API serving the Turbo Plant app. The purpose of the app is to make plant care easier within communities.

## Installation

1. Clone the repository
2. Add a new `.env` file with the right credentials

3. Install dependencies

```
npm install
```

4. Run server

From the typescript files (with rebuild on changes, recommanded during development):
```
npm run api
```

From the JS transpiled files (no rebuild on changes, to test the final served files):
```
npm run server
```
## Database

### Create a new database copied from the main one
This command copy the existing development database into a new one. Always use this to test your changes during development phase:
```
npm run seed YOUR-DATABASE-NAME
```

### Generate migration file
This command compare the schema file and the database's schema and generate a new migration file:
```
npm run generate
```

### Apply migration file
This command apply the generated migration files:
```
npm run migrate
```

## Run tests

```
npm run test
```

## Linter

```
npm run lint
```

## Docker

With Dockerfile written, build the image using the following command:
```
docker build
```

## Deployment

**turboplant-back** is deployed automatically on any push on the 'develop' branch.
