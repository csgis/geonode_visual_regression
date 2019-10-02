const DesktopPage = {
    label: "GeoNode Manage Styles – Desktop",
    url: process.env.BASEURL+"/gs/geonode:san_andres_y_providencia_poi/style/manage",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    readySelector: "footer",
    onReadyScript: "puppet/onReady.js",
    clickSelector: ['.multiselect'],
    postInteractionWait: 1000,
    delay: 2000,
    cookiePath: "backstop_data/engine_scripts/cookies.json"
};

const MobilePage = {
    label: "GeoNode Manage Styles - Mobile ",
    url: process.env.BASEURL+"/gs/geonode:san_andres_y_providencia_poi/style/manage",
    readySelector: "footer",
    delay: 2000,
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
