var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// sdk/ChatWidgetButton.js
var exports_ChatWidgetButton = {};
__export(exports_ChatWidgetButton, {
  widgetHolder: () => {
    {
      return widgetHolder;
    }
  },
  createChatWidgetButton: () => {
    {
      return createChatWidgetButton;
    }
  },
  closeBubble: () => {
    {
      return closeBubble;
    }
  },
  chatWidgetButton: () => {
    {
      return chatWidgetButton;
    }
  },
  chatBubble: () => {
    {
      return chatBubble;
    }
  },
  bubbleHolder: () => {
    {
      return bubbleHolder;
    }
  },
  body: () => {
    {
      return body;
    }
  }
});
var body, widgetHolder, bubbleHolder, chatBubble, closeBubble, chatWidgetButton, createChatWidgetButton;
var init_ChatWidgetButton = __esm(() => {
  body = document.getElementsByTagName("body")[0];
  widgetHolder = document.createElement("div");
  bubbleHolder = document.createElement("div");
  chatBubble = document.createElement("button");
  closeBubble = document.createElement("button");
  chatWidgetButton = document.createElement("button");
  createChatWidgetButton = (hideMessageBubble) => {
    chatWidgetButton.style.position = "fixed";
    chatWidgetButton.style.zIndex = "3000";
    chatWidgetButton.style.bottom = "1rem";
    chatWidgetButton.style.right = "1rem";
    chatWidgetButton.style.width = "40px";
    chatWidgetButton.style.height = "40px";
    chatWidgetButton.style.background = "red";
    chatWidgetButton.style.borderRadius = "100%";
    body.appendChild(chatWidgetButton);
  };
});

// sdk/index.js
var { createChatWidgetButton: createChatWidgetButton2 } = (init_ChatWidgetButton(), __toCommonJS(exports_ChatWidgetButton));
var runSDK = () => {
  createChatWidgetButton2();
};
window.aocChatWidget = {
  run: runSDK
};
