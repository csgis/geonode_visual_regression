const basicTestSettings = {
  referenceUrl: "",
  readyEvent: "",
  readySelector: "",
  delay: 0,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: "",
  clickSelector: "",
  postInteractionWait: 0,
  selectors: [],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.3,
  requireSameDimensions: true
};

const scenarios = [];

function addBasicTestSettings(scenarios) {
  return scenarios.map(scenario => {
    return { ...scenario, ...basicTestSettings };
  });
}

module.exports = addBasicTestSettings(scenarios);
