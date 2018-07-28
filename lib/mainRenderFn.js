'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mainRenderFn = mainRenderFn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _applicationFn = require('./applicationFn.js');

var _infoRenderFn = require('./infoRenderFn.js');

var _listRenderFn = require('./listRenderFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainRenderFn(tableThis) {
  var content = [];
  var props_table = (0, _applicationFn.createBasicProps)(tableThis.env, 'btb-table');
  if (tableThis.props.className) {
    props_table.className += ' ' + tableThis.props.className;
  };
  content.push(_react2.default.createElement(
    'div',
    _extends({}, props_table, { ref: function ref(_ref) {
        _refHandler(tableThis, _ref);
      } }),
    function () {
      var content_table = [];
      switch (tableThis.env.modeObj.mode) {
        case 'info':
          content_table.push((0, _infoRenderFn.infoRenderFn)(tableThis));
          break;
        case 'list':
          content_table.push((0, _listRenderFn.listRenderFn)(tableThis));
          break;
      };
      return content_table;
    }()
  ));
  return content;
};

function _refHandler(tableThis, ref) {
  tableThis.env.refFn(ref);
};