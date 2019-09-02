# GeoNode visual regression testing

<img width="1173" alt="diff" src="https://user-images.githubusercontent.com/20478652/64116178-2236c200-cd81-11e9-92f7-6568f25e60d1.png">



Using backstopjs we can get more security how changes to CSS or JS will affect the GeoNode GUI.

Because changes to frontend libraries are expected to bring visual changes, this test is aimed at a before-and-after comparison. However, it is also possible to use an external website as a reference. Furthermore to integrate the tests in CircleCi.

We're using local paver set up for development / testing. Of course, you could also use our local docker stack or even your production environment as a test environment.

## Installation

The setup uses puppeteer, make sure to have a up-to-date Chrome installation on your machine.

1. Clone this repository
2. Install dependencies f.e. `yarn` or `npm -install`


## Commands:

```
# create reference images
yarn ref

# test the scenarios
yarn test

# approve changes
yarn approve

# wipe out data
yarn clean
```

## Usage

1. Start you local GeoNode environment `paver setup_data && paver start`
2. Set base URL in .env (default: http://localhost:8000)
3. Login to your GeoNode and save the cookie to `./backstop_data/engine_scripts
/cookie.js` (In case you like to test protected views)
4. Create reference images with `yarn ref`
5. Do your changes to JS or CSS
6. Test you changes `yarn test`
7. Check the report, if you find unwanted behaviors fix your code or approve changes `yarn approve`

Visit the official BackstopJS docs for more: https://github.com/garris/BackstopJS#using-backstopjs

## Known issue, TODO

1. The manually saving of Cookies could be automated
2. The paver test server is sometimes slow. Hence `asyncCaptureLimit` has been set to a low value `1` to not get timeouts and a locked database
3. Delays should be removed and instead DOM selectors used for testing when some ajax request has finished.

## Writing new Tests

1. Duplicate a file in directory `./tests`
2. Change it to your needs
3. Register it in `./backstopConfig.js`
