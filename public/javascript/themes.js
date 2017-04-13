/* global define */
define([], function () {
    "use strict";
    return function (staticAssetsUrl) {
        return {
            "blue": {
                "color": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(0,181,226)",
                "logoUrl": staticAssetsUrl + "/images/trendminer-primary.png"
            }
        };
    };
});
