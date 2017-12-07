module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/config.js",
        "commons": "./src/components/commons",
        "images": "./src/assets/images",
      },
    },
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
};
