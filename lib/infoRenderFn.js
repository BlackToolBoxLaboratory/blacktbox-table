'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.infoRenderFn = infoRenderFn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataObj = require('./dataObj.js');

var _applicationFn = require('./applicationFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function infoRenderFn(tableThis) {
  var content = [];
  var props_info = (0, _applicationFn.createBasicProps)(tableThis.env, 'table-info');
  content.push(_react2.default.createElement(
    'table',
    props_info,
    infoBodyRenderFn(tableThis)
  ));
  return content;
};

function infoBodyRenderFn(tableThis) {
  var content = [];
  var dataArr = tableThis.env.tableBobyArr;
  var props_tbody = (0, _applicationFn.createBasicProps)(tableThis.env, 'info-tbody');
  content.push(_react2.default.createElement(
    'tbody',
    props_tbody,
    tableThis.env.tableHeadArr.map(function (entry_head, entry_head_index) {
      var entry_th = new _dataObj.HeadObj(entry_head);
      var content_tr = [];
      var props_tr = (0, _applicationFn.createBasicProps)(tableThis.env, 'tbody-tr');
      var trName = 'tr-' + entry_th.index;
      props_tr.className += ' ' + trName;
      if (tableThis.env.styleObj[trName]) {
        Object.keys(tableThis.env.styleObj[trName]).map(function (config) {
          props_tr.style[config] = tableThis.env.styleObj[trName][config];
        });
      };
      content_tr.push(_react2.default.createElement(
        'tr',
        props_tr,
        function () {
          var content_th = [];
          var props_th = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-th');
          var thName = 'th-' + entry_th.index;
          props_th.className += ' ' + thName;
          if (tableThis.env.styleObj[thName]) {
            Object.keys(tableThis.env.styleObj[thName]).map(function (config) {
              props_th.style[config] = tableThis.env.styleObj[thName][config];
            });
          };
          content_th.push(_react2.default.createElement(
            'th',
            props_th,
            entry_th.name
          ));
          return content_th;
        }(),
        dataArr.map(function (entry_body, index) {
          var entry_td = new _dataObj.BodyObj(tableThis.env.tableHeadArr, entry_body);
          var content_td = [];
          var props_td = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-td');
          var tdName = 'td-' + entry_th.index;
          props_td.className += ' ' + tdName;
          if (tableThis.env.styleObj[tdName]) {
            Object.keys(tableThis.env.styleObj[tdName]).map(function (config) {
              props_td.style[config] = tableThis.env.styleObj[tdName][config];
            });
          };
          content_td.push(_react2.default.createElement(
            'td',
            props_td,
            entry_td[entry_th.index]
          ));
          return content_td;
        }),
        function () {
          var content_noData = [];
          if (0 == entry_head_index && 0 == dataArr.length) {
            var props_noData = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-noData');
            content_noData.push(_react2.default.createElement(
              'td',
              _extends({}, props_noData, { rowSpan: tableThis.env.tableHeadArr.length }),
              tableThis.env.noDataMessage
            ));
          };
          return content_noData;
        }()
      ));
      return content_tr;
    })
  ));
  return content;
};