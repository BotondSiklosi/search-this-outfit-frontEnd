const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    rootDir: "./",
    transform: {
        "^.+\\.js?$": "babel-jest",
    },
    "modulePaths": [
        "src",
        "test"
    ]
}