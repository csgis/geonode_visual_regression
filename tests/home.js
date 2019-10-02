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
    hoverSelectors: ['div.col-xs-4.col-sm-3.col-md-2.col-lg-1:nth-child(1) h4']
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
