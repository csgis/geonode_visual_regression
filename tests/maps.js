const DesktopPage = {
    label: "GeoNode Maps - Desktop",
    url: process.env.BASEURL+"/maps/?limit=20&offset=0",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    delay: 5000,
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer"
};

const MobilePage = {
    label: "GeoNode Maps - Mobile ",
    url: process.env.BASEURL+"/maps/?limit=20&offset=0",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    delay: 5000,
    readySelector: "footer"
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
