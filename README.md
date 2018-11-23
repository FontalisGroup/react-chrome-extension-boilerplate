This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup

First create an `.env` file for an environment in which you want
to build the project

You can do this by typing the following command through terminal in
project root folder

```
// where {environment} is desired environment
// (e.g development)
cat .env.sample > .env.{environment}
```

Then in order to setup browser extension following steps should be taken:

```
  yarn
```

and

```
  yarn start
```

If the project doesn't start try running `yarn add node-sass` and then `yarn start`

### After starting the project

Open Chrome > go to extensions
You can open extensions either by going to settings > more tools > extensions
Or by typing `chrome://extensions` in the url

Next turn on developer mode in top-right corner and then select `Load unpacked`
Find the project folder and select `build` folder.

## Building the project

To build the project you should run one of the following commands:

Production build: `yarn build` or Development build: `yarn build:dev`

After build is finished you can follow steps under `After starting the project`.
