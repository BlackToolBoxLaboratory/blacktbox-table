'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENVDefaultObj = ENVDefaultObj;
exports.HeadObj = HeadObj;
exports.BodyObj = BodyObj;
function ENVDefaultObj() {
  this['env'] = {
    tableHeadArr: [],
    tableBobyArr: [],
    modeObj: {
      mode: 'list',
      listFeatureSearch: {
        enable: false,
        searchInputArr: [],
        searchMatchRateTheshold: 1,
        searchSpecAttributeEnable: false,
        searchSpecAttributeArr: []
      },
      listFeatureSort: {
        enable: false,
        defaultSortHeader: '',
        defaultSortState: 'descending',
        sortOrderArr: [],
        sortRuleFn: function sortRuleFn() {},
        customDescendingButton: '',
        customAdcendingButton: ''
      },
      listFeaturePage: {
        enable: false,
        dataPerPage: 10,
        pageIndex: 1
      }
    },
    noDataMessage: 'No data avaliable',
    styleObj: {},
    refFn: function refFn() {}
  };
}

function HeadObj(source) {
  var _this = this;

  this['name'] = '';
  this['index'] = '';
  this['sortType'] = 'string';
  this['sortFn'] = function () {};
  this['defaultSortStatus'] = 'ascending';
  Object.keys(source).map(function (key) {
    _this[key] = source[key];
  });
}

function BodyObj(headerData, source) {
  var _this2 = this;

  headerData.map(function (entry_th) {
    _this2[entry_th.index] = '';
  });
  Object.keys(source).map(function (key) {
    _this2[key] = source[key];
  });
}