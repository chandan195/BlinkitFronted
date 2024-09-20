"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Constants_1 = require("../../utils/Constants");
var splash_logo_jpeg_1 = require("../../assets/images/splash_logo.jpeg");
var Scaling_1 = require("../../utils/dist/Scaling");
var SplashScreen = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Image, { source: splash_logo_jpeg_1["default"], style: styles.logoImage })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: Constants_1.Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    logoImage: {
        height: Scaling_1.screenHeight * 0.3,
        width: Scaling_1.screenWidth * 1,
        resizeMode: "contain"
    }
});
exports["default"] = SplashScreen;
