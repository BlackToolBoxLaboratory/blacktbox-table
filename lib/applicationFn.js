"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBasicProps = createBasicProps;
exports.pagingFn = pagingFn;
function createBasicProps(env, name) {
  var obj = {
    className: name,
    style: env.styleObj[name] ? Object.assign({}, env.styleObj[name]) : {}
  };
  return obj;
};

function pagingFn(config, source) {
  var resultArr = [];
  if (config.enable) {
    var index = config.pageIndex;
    var perPage = config.dataPerPage;
    resultArr = source.slice((index - 1) * perPage, index * perPage);
  } else {
    resultArr = source;
  }
  return resultArr;
};