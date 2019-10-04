const DesktopPage = {
    label: "GeoNode Layers Filter and sort - Desktop",
    url: process.env.BASEURL+"/layers/?limit=20&offset=0",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    delay: 4000,
    clickSelectors: ['nav.filter h4 a','button.btn.btn-default.dropdown-toggle'],
    postInteractionWait: 2000,
    readySelector: "footer"
  };


const scenarios = [
    DesktopPage
];

module.exports = scenarios;
