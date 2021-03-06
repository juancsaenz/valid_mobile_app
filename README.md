# Valid Mobile App
Version 0.1.0

This project is a base to create Valid app for ios using react-native as platform of development.

- React-Navigation
- Unit testing with Jest
- iOS/Android support

# Dependencies
### React-Native
- React-Native CLI v2.0.1
### System
- NodeJS: v10.18.0
- Yarn package manager v1.19.1

# Start Up
- Pull the project to your local machine.
	> Make sure you have [NODE](https://nodejs.org/en/) installed.

- Go to the project's root.
- Execute the command `yarn install`
  > Make sure you have [YARN](https://yarnpkg.com/lang/en/) installed.
- Run the project for Android platform using `yarn android`
- Run the project for Ios platform using `yarn ios`
  > Make sure you have [React-Native-Cli](https://www.npmjs.com/package/react-native-cli) installed.

# Available Scripts

### `yarn start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`