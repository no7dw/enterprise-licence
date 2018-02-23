var province_city_area_code = require('./province_city_area_code');
var provinces = province_city_area_code.provinces;
var citys = province_city_area_code.citys;
var areas = province_city_area_code.areas;

//type,0:province,1:city,2:area
function _getData(areaCode, type) {
  var len = 2,
    obj = provinces;
  switch (type) {
    case 0:
      len = 2;
      obj = provinces;
      break;
    case 1:
      len = 4;
      obj = citys;
      break;
    case 2:
      len = 6;
      obj = areas;
      break;
  }
  var code = areaCode.slice(0, len);
  if (isNaN(Number(code))) {
    return "";
  }
  return obj[code] ? obj[code] : "";
}

function _getArea(areaCode) {
  return _getData(areaCode, 2);
}

function _getCity(areaCode) {
  return _getData(areaCode, 1);
}

function _getProvince(areaCode) {
  return _getData(areaCode, 0);
}
module.exports = function(areaCode) {
  var info = {
    province: _getProvince(areaCode),
    city: _getCity(areaCode),
    area: _getArea(areaCode),
  }
  return info
}
