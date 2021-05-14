const {
  addVisualRegressionTrackerPlugin,
} = require('@visual-regression-tracker/agent-cypress/dist/plugin')

module.exports = (on, config) => {
  addVisualRegressionTrackerPlugin(on, config)

  return config
}
