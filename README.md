

# Updater for package.json

### Getting started
#### 1. Provide credentials to config.json
```json
{
    "apiKey": "ATCTT3xFfGN0LE1BGklLyCFb8cgOTUpVlI1fefZvWvRwjrPog4UHgNZmMcBjDHrlrplt4JUMWWMmj2_PH9Col-HNkLHzxSIPbD0Y6wiPd1D0I3UUFsh3TvpQDEEpvTGK1jdSxu52Y6zlt_gjN8IEKG4jK983inP7dFrKeoK3X-y7f_HpG7po1A8=266AE909",
    "workspace": "gadjak-test-assessment",
    "repo": "test-assessment"
}
```

#### 2. Install dependencies
```javascript
yarn install
```

#### 3. Run
```javascript
yarn start -p express@3.0.0
```

### Params
#### 1. "-p" (required) - Package that you want to update
```javascript
yarn start -p express@3.0.0
yarn start -p express
```
If run without version then update to latest

#### 2. "-b" (optional) - Target branch to pull request
```javascript
yarn start -p express -b main
```
Default branch is "master"

#### 2. "-r" (option) - Repository
```javascript
yarn start -p express -r <your-repository>
```
Default get from config.json