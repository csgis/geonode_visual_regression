const DesktopPage = {
    label: "GeoNode Layers - Desktop",
    url: process.env.BASEURL+"/layers/?limit=20&offset=0",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    delay: 5000,
    readySelector: "footer"
};

const MobilePage = {
    label: "GeoNode Layers - Mobile ",
    url: process.env.BASEURL+"/layers/?limit=20&offset=0",
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
