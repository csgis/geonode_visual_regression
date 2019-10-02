const DesktopPage = {
    label: "GeoNode Documents – Desktop",
    url: process.env.BASEURL+"/documents/?limit=20&offset=0",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    readySelector: "footer",
    onReadyScript: "puppet/onReady.js",
    clickSelectors: ['nav.filter:nth-child(1) h4 a'],
    postInteractionWait: 1000,
    delay: 2000,
    cookiePath: "backstop_data/engine_scripts/cookies.json"
};

const MobilePage = {
    label: "GeoNode Documents (should show Login)- Mobile ",
    url: process.env.BASEURL+"/documents/?limit=20&offset=0",
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
