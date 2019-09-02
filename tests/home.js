const DesktopPage = {
    label: "GeoNode Home - Desktop",
    url:  process.env.BASEURL,
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    keyPressSelectors: [
      {
        selector: "#search_input",
        keyPress: "S"
      }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    postInteractionWait: 2000,
    readySelector: "footer",
};

const MobilePage = {
    label: "GeoNode Home - Mobile ",
    url: process.env.BASEURL,
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
