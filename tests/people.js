const DesktopPage = {
    label: "GeoNode People - Desktop",
    url: process.env.BASEURL+"/people/?limit=20&offset=0",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer"
};

const MobilePage = {
    label: "GeoNode People - Mobile ",
    url: process.env.BASEURL+"/people/?limit=20&offset=0",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    readySelector: "footer"
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
