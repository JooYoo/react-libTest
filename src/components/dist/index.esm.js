import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".YuButton-module_button__1QH5E {\n  margin: 10px;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 20px;\n}\n";
var styleModule$1 = {"button":"YuButton-module_button__1QH5E"};
styleInject(css_248z$1);

const YuButton = ({
  text = 'click me'
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: styleModule$1.button
  }, text));
};

var css_248z = ".YuCard-module_card-container__1ZQ2d {\n  margin: 10px;\n  border-radius: 10px;\n  height: 300px;\n  width: 200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.YuCard-module_card-container__1ZQ2d:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.YuCard-module_card-header__59KbY {\n  padding: 15px;\n}\n";
var styleModule = {"card-container":"YuCard-module_card-container__1ZQ2d","card-header":"YuCard-module_card-header__59KbY"};
styleInject(css_248z);

const YuCard = ({
  text = 'Card'
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styleModule['card-container']
  }, /*#__PURE__*/React.createElement("h3", {
    className: styleModule['card-header']
  }, text));
};

/* eslint-disable import/no-anonymous-default-export */

const components = () => {
  return {
    YuButton: YuButton,
    YuCard: YuCard
  };
};

var index = components();

export default index;
