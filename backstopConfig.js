const dotenv = require('dotenv');
dotenv.config();

const commonScenario = require('./tests/_common');
const homeScenarios = require('./tests/home');
const layersScenarios = require('./tests/layers');
const layersSortScenarios = require('./tests/layers_sort');
const mapsScenarios = require('./tests/maps');
const peopleScenarios = require('./tests/people');
const createMapScenarios = require('./tests/createMap');
const singleLayerScenarios = require('./tests/singleLayer');
const layerUploadScenarios = require('./tests/layerUpload');
const metaWizardScenarios = require('./tests/metaWizard');
const documentScenarios = require('./tests/documents');
const remoteServiceScenarios = require('./tests/remoteService');
const manageStylesScenarios = require('./tests/manage_styles');
const activityScenarios = require('./tests/activity');
const inboxScenarios = require('./tests/inbox');
const monitoringScenarios = require('./tests/monitoring');

const scenarios = commonScenario.concat(
  homeScenarios,
  layersScenarios,
  layersSortScenarios,
  mapsScenarios,
  peopleScenarios,
  singleLayerScenarios,
  createMapScenarios,
  layerUploadScenarios,
  metaWizardScenarios,
  remoteServiceScenarios,
  documentScenarios,
  manageStylesScenarios,
  inboxScenarios,
  monitoringScenarios
);

module.exports = {
    id: "geonode_regression_tests",
    viewports: [
        {
            label: "phone",
            width: 320,
            height: 480
        },
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: scenarios,
    paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    debug: true,
    debugWindow: false,
    engineOptions: {
        args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 1,
    asyncCompareLimit: 100
}
