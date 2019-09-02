# Geonode visual regression testing

Using backstopjs we can get more security how changes to css or js will affect the GeoNode gui.

While it's possible to check against an external website like master.demo.geonode org or integrate backstopjs in CI, we're expect that updates to frontend are expected. Hence these 'scenarios' do just help you to keep the overview.

We're using local paver setup for development and testing. Of course you could use docker stacks or even your production enviromnent.

## Install

Test use puppeteer, make sure to have a up-to-date Chrome installation. Tests has only done on OSX by now.

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
2. Set base URL in .env
3. Login to your GeoNode and save the cookie (In case you like to test proteced views)
4. Create reference images `yarn ref`
5. Do your changes to JS or CSS
6. Test you changes `yarn test`
7. Check the report, if you find unwanted behaviors fix your code or approve changes `yarn approve`

## Known issue, TODO

1. The manually saving of Cookies could be automated
2. The paver setup is sometimes slow. `asyncCaptureLimit` has been set to a low value `1` to not get timeouts and a locked database
3. Delays should be removed and instead DOM selectors used for testing when some ajax request has finished.

## Writing new Tests

1. Duplicate a file in directory `./tests`
2. Change it to your needs
3. Register it in `./backstopConfig.js`
