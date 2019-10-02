const DesktopPage = {
    label: "GeoNode SingleLayer - Desktop",
    url: process.env.BASEURL+"/layers/geonode:single_point",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    clickSelectors: ['.list-group-item:nth-child(4) button'],
    postInteractionWait: 2000,
    delay: 5000
};

const MobilePage = {
    label: "GeoNode SingleLayer - Mobile ",
    url: process.env.BASEURL+"/layers/geonode:single_point",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    delay: 5000
  };

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
