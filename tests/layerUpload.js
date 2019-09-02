const DesktopPage = {
    label: "GeoNode Layer Upload - Desktop",
    url: process.env.BASEURL+"/layers/upload",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer",
    clickSelectors: ['a.dropdown-toggle.avatar'],
    postInteractionWait: 1000,
};

const MobilePage = {
    label: "GeoNode Layer Upload - Mobile ",
    url: process.env.BASEURL+"/layers/upload",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
