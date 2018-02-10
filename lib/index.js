'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableThis = void 0;

function HeadObj(obj) {
  var _this = this;

  this['name'] = '';
  this['index'] = '';
  this['sortType'] = 'string';
  this['sortFn'] = function () {};
  this['defaultSortStatus'] = 'ascending';
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });
};
function BodyObj(obj) {
  var _this2 = this;

  tableThis.env.tableHeadArr.map(function (entry_th) {
    _this2[entry_th.index] = '';
  });
  Object.keys(obj).map(function (key) {
    _this2[key] = obj[key];
  });
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this3 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this3.env = {
      tableHeadArr: [],
      tableBobyArr: [],
      modeObj: {
        mode: 'list',
        listFeatureSearch: {
          keyword: '',
          matchAll: false
        },
        listFeatureSort: {
          enable: false,
          defaultSortHead: '',
          sortType: 'ascending'
        },
        listFeaturePage: {
          perPage: 0,
          page: 1
        }
      },
      styleObj: {},
      inputRefFn: function inputRefFn() {}
    };
    _this3.sortStatusList = {};
    return _this3;
  }

  _createClass(Menu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateENVFn(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateENVFn(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var content = [];
      var props_table = this.createBasicProps('btb-table');
      if (this.props.className) {
        props_table.className += ' ' + this.props.className;
      };
      content.push(_react2.default.createElement(
        'div',
        _extends({}, props_table, { ref: function ref(_ref) {
            _this4._refHandler(_ref);
          } }),
        function () {
          var content_table = [];
          switch (_this4.env.modeObj.mode) {
            case 'info':
              content_table.push(_this4.infoRenderFn());
              break;
            case 'list':
              content_table.push(_this4.listRenderFn());
              break;
          };
          return content_table;
        }()
      ));
      return content;
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var _this5 = this;

      this.env = {
        tableHeadArr: [],
        tableBobyArr: [],
        modeObj: {
          mode: 'list',
          listFeatureSearch: {
            keyword: '',
            matchAll: false
          },
          listFeatureSort: {
            enable: false,
            defaultSortHead: '',
            sortType: 'ascending'
          },
          listFeaturePage: {
            perPage: 0,
            page: 1
          }
        },
        styleObj: {},
        inputRefFn: function inputRefFn() {}
      };
      Object.keys(source).map(function (entry) {
        switch (entry) {
          case 'modeObj':
            Object.keys(source.modeObj).map(function (modeObj_entry) {
              switch (modeObj_entry) {
                case 'listFeatureSearch':
                case 'listFeatureSort':
                case 'listFeaturePage':
                  Object.keys(source.modeObj[modeObj_entry]).map(function (listFeature_entry) {
                    _this5.env.modeObj[modeObj_entry][listFeature_entry] = source.modeObj[modeObj_entry][listFeature_entry];
                  });
                  break;
                default:
                  _this5.env.modeObj[modeObj_entry] = source.modeObj[modeObj_entry];
                  break;
              };
            });
            break;
          default:
            _this5.env[entry] = source[entry];
            break;
        };
      });
      tableThis = this;
    }
  }, {
    key: 'infoRenderFn',
    value: function infoRenderFn() {
      var content = [];
      var props_info = this.createBasicProps('table-info');
      content.push(_react2.default.createElement(
        'table',
        props_info,
        this.infoBodyRenderFn()
      ));
      return content;
    }
  }, {
    key: 'infoBodyRenderFn',
    value: function infoBodyRenderFn() {
      var _this6 = this;

      var content = [];
      var props_info = this.createBasicProps('table-info');
      var props_tbody = this.createBasicProps('info-tbody');
      content.push(_react2.default.createElement(
        'table',
        props_info,
        _react2.default.createElement(
          'tbody',
          props_tbody,
          this.env.tableHeadArr.map(function (entry_head) {
            var entry_th = new HeadObj(entry_head);
            var content_tr = [];
            var props_tr = _this6.createBasicProps('tbody-tr');
            var props_th = _this6.createBasicProps('tr-th');
            content_tr.push(_react2.default.createElement(
              'tr',
              props_tr,
              _react2.default.createElement(
                'th',
                props_th,
                'entry_th.name'
              ),
              _this6.env.tableBobyArr.map(function (entry_body) {
                var entry_td = new BodyObj(entry_body);
                var content_td = [];
                var props_td = _this6.createBasicProps('tr-td');
                var tdHeadName = 'td-' + entry_th.index;
                props_td.className += ' ' + tdHeadName;
                if (_this6.env.styleObj[tdHeadName]) {
                  Object.keys(_this6.env.styleObj[tdHeadName]).map(function (config) {
                    props_td.style[config] = _this6.env.styleObj[tdHeadName][config];
                  });
                };
                content_td.push(_react2.default.createElement(
                  'td',
                  props_td,
                  entry_td[entry_th.index]
                ));
                return content_td;
              })
            ));
            return content_tr;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'listRenderFn',
    value: function listRenderFn() {
      var content = [];
      var props_list = this.createBasicProps('table-list');
      content.push(_react2.default.createElement(
        'table',
        props_list,
        this.listHeadRenderFn(),
        this.listBodyRenderFn()
      ));
      return content;
    }
  }, {
    key: 'listHeadRenderFn',
    value: function listHeadRenderFn() {
      var _this7 = this;

      var content = [];
      var props_thead = this.createBasicProps('list-thead');
      var props_tr = this.createBasicProps('thead-tr');
      content.push(_react2.default.createElement(
        'thead',
        props_thead,
        _react2.default.createElement(
          'tr',
          props_tr,
          this.env.tableHeadArr.map(function (entry_head) {
            var entry_th = new HeadObj(entry_head);
            var props_th = _this7.createBasicProps('tr-th');
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
  }, {
    key: 'listBodyRenderFn',
    value: function listBodyRenderFn() {
      var _this8 = this;

      var content = [];
      var props_tbody = this.createBasicProps('list-tbody');
      content.push(_react2.default.createElement(
        'tbody',
        props_tbody,
        this.env.tableBobyArr.map(function (entry_body) {
          var entry_td = new BodyObj(entry_body);
          var content_tr = [];
          var props_tr = _this8.createBasicProps('tbody-tr');
          content_tr.push(_react2.default.createElement(
            'tr',
            props_tr,
            _this8.env.tableHeadArr.map(function (entry_head) {
              var entry_th = new HeadObj(entry_head);
              var content_td = [];
              var props_td = _this8.createBasicProps('tr-td');
              var tdHeadName = 'td-' + entry_th.index;
              props_td.className += ' ' + tdHeadName;
              if (_this8.env.styleObj[tdHeadName]) {
                Object.keys(_this8.env.styleObj[tdHeadName]).map(function (config) {
                  props_td.style[config] = _this8.env.styleObj[tdHeadName][config];
                });
              };
              content_td.push(_react2.default.createElement(
                'td',
                props_td,
                entry_td[entry_th.index]
              ));
              return content_td;
            })
          ));
          return content_tr;
        })
      ));
      return content;
    }
  }, {
    key: 'createBasicProps',
    value: function createBasicProps(name) {
      var obj = {
        className: name,
        style: this.env.styleObj[name] ? this.env.styleObj[name] : {}
      };
      return obj;
    }
  }, {
    key: '_refHandler',
    value: function _refHandler(ref) {
      this.env.inputRefFn(ref);
    }
  }]);

  return Menu;
}(_react2.default.Component);

;

Menu.propTypes = {
  tableHeadArr: _propTypes2.default.array.isRequired,
  tableBodyArr: _propTypes2.default.array.isRequired,
  modeObj: _propTypes2.default.object,
  styleObj: _propTypes2.default.object,
  inputRefFn: _propTypes2.default.func
};

Menu.defaultProps = {
  tableHeadArr: [],
  tableBodyArr: [],
  modeObj: {},
  styleObj: {},
  inputRefFn: function inputRefFn() {}
};

exports.default = Menu;