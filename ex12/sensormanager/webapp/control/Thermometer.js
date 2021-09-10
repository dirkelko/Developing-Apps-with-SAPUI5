sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("keepcool.sensormanager.control.Thermometer", {
		metadata : {
			properties : {
				value: {type : "float", defaultValue : 0},
				color: {type : "sap.ui.core.CSSColor"}
			}
		},
        renderer : {
            apiVersion : 2,
            render : function (oRM, oControl) {
                var height = parseInt(Math.min(oControl.getValue() * 25, 153));
                var y = 49 + 118 - height;
                oRM.write("<svg class=\"thermometer\" version=\"1.1\" viewBox=\"0 0 94 237\" xmlns=\"http://www.w3.org/2000/svg\">");
                    oRM.write("<rect class=\"thermometer__mercury\" fill=\"" + oControl.getColor() + "\" x=\"31.35\" y=\"" + y + "\" width=\"17.65\" height=\"" + height + "\"/>");
                    oRM.write("<path class=\"thermometer__frame\" d=\"m92.26 159.71h-27.54v-4h27.54zm0-40h-27.54v4h27.54zm0-36h-27.54v4h27.54zm0-36h-27.54v4h27.54zm0-36h-27.54v4h27.54zm-12 185.18a40.39 40.39 0 0 0-21.51-35.54v-144.35a17.05 17.05 0 0 0-17-17h-3.21a17.06 17.06 0 0 0-17 17v144.35a40.11 40.11 0 1 0 58.72 35.54zm-38.59-192.89a13.06 13.06 0 0 1 13 13v146.8l1.13 0.54a36.11 36.11 0 1 1-51.8 32.55 35.9 35.9 0 0 1 20.37-32.51l1.13-0.54v-146.84a13.06 13.06 0 0 1 13-13z\"/>");
                    oRM.write("<path class=\"thermometer__mercury\" fill=\"" + oControl.getColor() + "\" d=\"m31.35 163v4a31.15 31.15 0 1 0 38.361 20 31.23 31.23 0 0 0-20.711-20v-4h-17.65z\"/>");
                    oRM.write("<foreignObject x=\"20\" y=\"" + 176 + "\" width=\"42\" height=\"42\">");
                    oRM.write("<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"thermometer__value\">" + oControl.getValue().toFixed(1) + "</div>");
                    oRM.write("</foreignObject>");
                oRM.write("</svg>");
            }
        }
	});
});