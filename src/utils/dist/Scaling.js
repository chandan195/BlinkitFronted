"use strict";
exports.__esModule = true;
exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = react_native_1.Dimensions.get('window').width;
exports.screenHeight = react_native_1.Dimensions.get('window').height;
