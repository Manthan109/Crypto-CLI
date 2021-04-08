const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + " https://nomics.com",
        validate: isRequired
      },
    ]);

    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    console.log("SHOW");
  },
  remove() {
    console.log("REMOVE");
  },
};

module.exports = key;
