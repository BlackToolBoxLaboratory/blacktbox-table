'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.listRenderFn = listRenderFn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataObj = require('./dataObj.js');

var _applicationFn = require('./applicationFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listRenderFn(tableThis) {
  var content = [];
  var props_list = (0, _applicationFn.createBasicProps)(tableThis.env, 'table-list');
  content.push(_react2.default.createElement(
    'table',
    props_list,
    listHeadRenderFn(tableThis),
    listBodyRenderFn(tableThis)
  ));
  return content;
}

function listHeadRenderFn(tableThis) {
  var content = [];
  var props_thead = (0, _applicationFn.createBasicProps)(tableThis.env, 'list-thead');
  var props_tr = (0, _applicationFn.createBasicProps)(tableThis.env, 'thead-tr');
  content.push(_react2.default.createElement(
    'thead',
    props_thead,
    _react2.default.createElement(
      'tr',
      props_tr,
      tableThis.env.tableHeadArr.map(function (entry_head) {
        var entry_th = new _dataObj.HeadObj(entry_head);
        var props_th = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-th');
        return _react2.default.createElement(
          'th',
          props_th,
          entry_th.name
        );
      })
    )
  ));
  return content;
}

function listBodyRenderFn(tableThis) {
  var content = [];
  var reourceArr = (0, _applicationFn.resultFn)(tableThis.searchStatusArr, tableThis.sortStatusArr, tableThis.env.tableBobyArr);
  var dataArr = (0, _applicationFn.pagingFn)(tableThis.env.modeObj.listFeaturePage, reourceArr);
  var props_tbody = (0, _applicationFn.createBasicProps)(tableThis.env, 'list-tbody');
  content.push(_react2.default.createElement(
    'tbody',
    props_tbody,
    dataArr.map(function (entry_body) {
      var entry_td = new _dataObj.BodyObj(tableThis.env.tableHeadArr, entry_body);
      var content_tr = [];
      var props_tr = (0, _applicationFn.createBasicProps)(tableThis.env, 'tbody-tr');
      content_tr.push(_react2.default.createElement(
        'tr',
        props_tr,
        tableThis.env.tableHeadArr.map(function (entry_head) {
          var entry_th = new _dataObj.HeadObj(entry_head);
          var content_td = [];
          var props_td = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-td');
          var tdHeadName = 'td-' + entry_th.index;
          props_td.className += ' ' + tdHeadName;
          if (tableThis.env.styleObj[tdHeadName]) {
            Object.keys(tableThis.env.styleObj[tdHeadName]).map(function (config) {
              props_td.style[config] = tableThis.env.styleObj[tdHeadName][config];
            });
          }
          content_td.push(_react2.default.createElement(
            'td',
            props_td,
            entry_td[entry_th.index]
          ));
          return content_td;
        })
      ));
      return content_tr;
    }),
    function () {
      var content_noData = [];
      if (0 == dataArr.length) {
        var props_noData = (0, _applicationFn.createBasicProps)(tableThis.env, 'tr-noData');
        content_noData.push(_react2.default.createElement(
          'td',
          _extends({}, props_noData, { colSpan: tableThis.env.tableHeadArr.length }),
          tableThis.env.noDataMessage
        ));
      }
      return content_noData;
    }()
  ));
  return content;
}