const DesktopPage = {
    label: "GeoNode Inbox - Desktop",
    url: process.env.BASEURL+"/messages/inbox/",
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
    label: "GeoNode Inbox - Mobile ",
    url: process.env.BASEURL+"/messages/inbox/",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readySelector: "footer",
    delay: 2000
};

const scenarios = [
    DesktopPage,
    MobilePage
];

module.exports = scenarios;
