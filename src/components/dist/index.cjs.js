'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z$2 = ".ButtonEclipse-module_button__gQA4H {\n  height: 50px;\n  width: 50px;\n  margin: 20px;\n  border-radius: 50%;\n  font-size: 30px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); }\n  .ButtonEclipse-module_button__gQA4H:active {\n    border-color: rgba(0, 0, 0, 0.1);\n    box-shadow: unset; }\n";
var style$2 = {"button":"ButtonEclipse-module_button__gQA4H"};
styleInject(css_248z$2);

var ButtonEclipse = function ButtonEclipse(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '+' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: style$2.button
  }, text));
};

var css_248z$1 = ".YuButton-module_btn__byA64 {\n  margin: 15px;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: row-reverse; }\n  .YuButton-module_btn__txt__nGdNB {\n    margin: 0 1rem; }\n  .YuButton-module_btn__icon__PpkT4 {\n    margin: 0 0.5rem; }\n  .YuButton-module_btn__byA64:active {\n    border: 2px solid rgba(0, 0, 0, 0.2);\n    box-shadow: unset; }\n";
var style$1 = {"btn":"YuButton-module_btn__byA64","btn__txt":"YuButton-module_btn__txt__nGdNB","btn__icon":"YuButton-module_btn__icon__PpkT4"};
styleInject(css_248z$1);

var YuButton = function YuButton(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? 'click me' : _props$text,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: style$1.btn
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$1['btn__txt']
  }, text), /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$1['btn__icon']
  }, children)));
};

var css_248z = ".YuCard-module_card-container__1XGRU {\n  margin: 10px;\n  border-radius: 10px;\n  height: 300px;\n  width: 200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n  .YuCard-module_card-container__1XGRU:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n  .YuCard-module_card-container__1XGRU .YuCard-module_card-header__SskPV {\n    padding: 15px; }\n";
var style = {"card-container":"YuCard-module_card-container__1XGRU","card-header":"YuCard-module_card-header__SskPV"};
styleInject(css_248z);

var YuCard = function YuCard(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Card' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: style['card-container']
  }, /*#__PURE__*/React__default['default'].createElement("h3", {
    className: style['card-header']
  }, text));
};

/* eslint-disable import/no-anonymous-default-export */

var components = function components() {
  return {
    YuButton: YuButton,
    ButtonEclipse: ButtonEclipse,
    YuCard: YuCard
  };
};

var index = components();

module.exports = index;
