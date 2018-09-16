'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBasicProps = createBasicProps;
exports.pagingFn = pagingFn;
exports.resultFn = resultFn;
exports.dataSearching = dataSearching;
function createBasicProps(env, name) {
  var obj = {
    className: name,
    style: env.styleObj[name] ? Object.assign({}, env.styleObj[name]) : {}
  };
  return obj;
}

function pagingFn(pageConfig, source) {
  var resultArr = [];
  if (pageConfig.enable) {
    var index = pageConfig.pageIndex;
    var perPage = pageConfig.dataPerPage;
    resultArr = source.slice((index - 1) * perPage, index * perPage);
  } else {
    resultArr = source;
  }
  return resultArr;
}

function resultFn(searchStatusArr, sortStatusArr, source) {
  var resultArr = [];
  source.map(function (entry, index) {
    if (searchStatusArr[index]) {
      resultArr.push(entry);
    }
  });
  return resultArr;
}

function dataSearching(env) {
  var searchStatusArr = [];
  var searchConfig = env.modeObj.listFeatureSearch;
  var attributeArr = [];
  var matchArr = [];
  if ('list' == env.modeObj.mode && searchConfig.enable && 0 < searchConfig.searchInputArr.length) {
    if (searchConfig.searchSpecAttributeEnable) {
      attributeArr = searchConfig.searchSpecAttributeArr.slice(0);
    } else {
      attributeArr = env.tableHeadArr.map(function (entry) {
        return entry.index;
      });
    }
    matchArr = env.tableBobyArr.map(function (data) {
      var matchCounter = 0;
      searchConfig.searchInputArr.map(function (target) {
        for (var i = 0; i < attributeArr.length; i++) {
          if (data[attributeArr[i]].toString().match(target)) {
            matchCounter += 1;
            break;
          }
        }
      });
      return matchCounter;
    });
    if (0 < parseFloat(searchConfig.searchMatchRateTheshold) && 1 > parseFloat(searchConfig.searchMatchRateTheshold)) {
      searchConfig.searchMatchRateTheshold = 0;
      /* eslint-disable no-console*/
      console.error('BLB Error: blacktbox-table.modeObj.listFeatureSearch.searchMatchRateTheshold should be float between 0-1.');
      /* eslint-enable no-console*/
    }
    searchStatusArr = matchArr.map(function (entry) {
      var matchRate = entry / searchConfig.searchInputArr.length;
      return searchConfig.searchMatchRateTheshold <= matchRate;
    });
  } else {
    searchStatusArr = env.tableBobyArr.map(function () {
      return true;
    });
  }
  return searchStatusArr;
}