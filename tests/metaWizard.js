const DesktopPage = {
    label: "GeoNode SingleLayer metaWizard - Desktop",
    url: process.env.BASEURL+"/layers/geonode:single_point/metadata",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    clickSelectors: ['#second'],
    postInteractionWait: 2000,
    delay: 5000,
    readySelector: "footer"
};

const MobilePage = {
    label: "GeoNode SingleLayer metaWizard - Mobile ",
    url: process.env.BASEURL+"/layers/geonode:single_point/metadata",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    delay: 5000,
    readySelector: "footer",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
