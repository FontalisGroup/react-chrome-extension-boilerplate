This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Getting started

Folders are structured based on extensions scripts available `background/content/popup`.

I suggest reading chrome extension [docs](https://developer.chrome.com/extensions/getstarted) for more info.

We are using `react-chrome-redux` to keep track of state. For some basic
info about it's usage, please read their [docs](https://github.com/tshaddix/react-chrome-redux/wiki).

## Setup

First thing to do would be to create an `.env` file. It can have
some prefixes (.e.g `.env.development`, `.env.development.local`).
Only one `.env` file
will be loaded and loading priority goes to the ones with prefix so first
to load will be `.env.development.local.` if it exists.
Otherwise `.env.development.` is loaded, etc.

You can create an env file by typing following command in
project root folder

```
// where {environment} is desired environment
// (e.g development)
cat .env.example > .env.{environment}
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
You can open extensions either by going to `settings > more tools > extensions`
or by typing `chrome://extensions` in the url

Next turn on developer mode in top-right corner and then select `Load unpacked`
Find the project folder and select `build` folder.

## Building the project

To build the project you should run one of the following commands:

Production build: `yarn build` or Development build: `yarn build:dev`

After build is finished you can follow steps under `After starting the project`.
