const DesktopPage = {
    label: "GeoNode Activity - Desktop",
    url: process.env.BASEURL+"/social/recent-activity",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer",
    delay: 2000
};

const MobilePage = {
    label: "GeoNode Activity - Mobile ",
    url: process.env.BASEURL+"/social/recent-activity",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    readySelector: "footer",
    delay: 2000
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
