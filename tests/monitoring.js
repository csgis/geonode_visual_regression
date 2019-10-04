const DesktopPage = {
    label: "GeoNode Monitoring - Desktop",
    url: process.env.BASEURL+"/monitoring/#/",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer",
    delay: 4000
};


const scenarios = [
    DesktopPage
];

module.exports = scenarios;
