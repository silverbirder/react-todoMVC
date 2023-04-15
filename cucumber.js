const defaultOptions = "--require features/support/env.js --require 'features/**/*.ts' --publish-quiet"

module.exports = {
    default: `${defaultOptions}`,
}
