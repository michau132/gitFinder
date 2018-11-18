module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true
        }],
        "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
    },
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true,
        "jest": true,
    }
}
