# archiduchesses back-end

The **archiduchesses back-end** is an API serving the Turbo Plant app. The purpose of the app is to make plant care easier within communities.

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

### Run tests

```
npm run test
```

### Linter

```
npm run lint
```
To automatically fix  what can be:
```
npm run lint -- --fix
```

### Docker

With Dockerfile written, build the image using the following command:
```
docker build
```

## Deployment

**archiduchesses-back** is deployed automatically on any push on the 'develop' branch.
