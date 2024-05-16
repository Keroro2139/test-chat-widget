const { createChatWidgetButton } = require("./ChatWidgetButton");

const runSDK = () => {
  createChatWidgetButton();
};

window.aocChatWidget = {
  run: runSDK,
};
