const DesktopPage = {
    label: "GeoNode Remote Service – Desktop",
    url: process.env.BASEURL+"/services/register/",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    readySelector: "footer",
    onReadyScript: "puppet/onReady.js",
    clickSelectors: ['#id_type'],
    postInteractionWait: 1000,
    cookiePath: "backstop_data/engine_scripts/cookies.json"
};

const MobilePage = {
    label: "GeoNode Remote Service - Mobile ",
    url: process.env.BASEURL+"/services/register/",
    readySelector: "footer",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ]
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
