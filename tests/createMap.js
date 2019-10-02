const DesktopPage = {
    label: "Create Map - Desktop",
    url: process.env.BASEURL+"/maps/new",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    delay: 13000,
    readySelector: "#zoomin-btn",
};

const scenarios = [
    DesktopPage
];

module.exports = scenarios;
