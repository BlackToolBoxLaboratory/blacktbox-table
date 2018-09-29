'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dataObj = require('./dataObj.js');

var _applicationFn = require('./applicationFn.js');

var _mainRenderFn = require('./mainRenderFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.env = new _dataObj.ENVDefaultObj().env;
    _this.searchStatusArr = new Array();
    _this.sortStatusArr = new Array();
    return _this;
  }

  _createClass(Table, [{
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
      return (0, _mainRenderFn.mainRenderFn)(this);
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var newENV = new _dataObj.ENVDefaultObj().env;
      Object.keys(source).map(function (entry) {
        switch (entry) {
          case 'styleObj':
            Object.keys(source.styleObj).map(function (node_entry) {
              newENV.styleObj[node_entry] = {};
              Object.keys(source.styleObj[node_entry]).map(function (style_entry) {
                var camelCaseStyleName = (0, _applicationFn.camelCaseTransformerFn)(style_entry);
                newENV.styleObj[node_entry][camelCaseStyleName] = source.styleObj[node_entry][style_entry];
              });
            });
            break;
          case 'modeObj':
            Object.keys(source.modeObj).map(function (modeObj_entry) {
              switch (modeObj_entry) {
                case 'listFeatureSearch':
                case 'listFeatureSort':
                case 'listFeaturePage':
                  Object.keys(source.modeObj[modeObj_entry]).map(function (listFeature_entry) {
                    newENV.modeObj[modeObj_entry][listFeature_entry] = source.modeObj[modeObj_entry][listFeature_entry];
                  });
                  break;
                default:
                  newENV.modeObj[modeObj_entry] = source.modeObj[modeObj_entry];
                  break;
              }
            });
            break;
          default:
            newENV[entry] = source[entry];
            break;
        }
      });
      this.env = newENV;
      this.searchStatusArr = (0, _applicationFn.dataSearching)(this.env);
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  tableHeadArr: _propTypes2.default.array.isRequired,
  tableBodyArr: _propTypes2.default.array.isRequired
};

Table.defaultProps = {
  tableHeadArr: [],
  tableBodyArr: []
};

exports.default = Table;