function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var color_1 = require("color");
var drawingpad_common_1 = require("./drawingpad-common");
var SignaturePad = com.github.gcacace.signaturepad.views.SignaturePad;
__export(require("./drawingpad-common"));
var DrawingPad = (function (_super) {
    __extends(DrawingPad, _super);

    function DrawingPad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DrawingPad.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    DrawingPad.prototype.createNativeView = function () {
        var signaturePad = new SignaturePad(this._context, null);
        if (this.penColor) {
            signaturePad.setPenColor(this.penColor.android);
        }
        if (this.penWidth) {
            signaturePad.setMinWidth(this.penWidth);
        }
        return signaturePad;
    };
    DrawingPad.prototype[drawingpad_common_1.penWidthProperty.getDefault] = function () {
        return this.nativeView.minWidth;
    };
    DrawingPad.prototype[drawingpad_common_1.penWidthProperty.setNative] = function (value) {
        this.nativeView.setMinWidth(value);
    };
    DrawingPad.prototype[drawingpad_common_1.penColorProperty.getDefault] = function () {
        return this.nativeView.penColor;
    };
    DrawingPad.prototype[drawingpad_common_1.penColorProperty.setNative] = function (value) {
        var color = value instanceof color_1.Color ? value.android : value;
        this.nativeView.setPenColor(color);
    };
    DrawingPad.prototype.getDrawing = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!_this.nativeView.isEmpty()) {
                    var data = _this.nativeView.getSignatureBitmap();
                    resolve(data);

                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    DrawingPad.prototype.getTransparentDrawing = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!_this.nativeView.isEmpty()) {
                    var data = _this.nativeView.getTransparentSignatureBitmap();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    DrawingPad.prototype.getDrawingSvg = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!_this.nativeView.isEmpty()) {
                    var data = _this.nativeView.getSignatureSvg();
                    var svgHeaderRegEx = /<svg (.*) height="(\d+)" width="(\d+)"(.*)>/i;
                    resolve(data.replace(svgHeaderRegEx, "<svg $1 viewBox=\"0, 0, $3, $2\" height=\"$2\" width=\"$3\"$4>"));
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    DrawingPad.prototype.clearDrawing = function () {
        try {
            this.nativeView.clear();
        } catch (err) {
            console.log('Error in clearDrawing: ' + err);
        }
    };
    DrawingPad.prototype.setPts = function (arr) {
        try {
            if (this.android)
                this.android.setPts(arr);
        } catch (err) {
            console.log('Error in setPts: ' + err);
        }
    };
    DrawingPad.prototype.setHrtMark = function (index, str) {
        try {
            console.log('setHrtMark function');
            if (this.android)
                this.android.setHrtMark(index, str);
        } catch (err) {
            console.log('Error in setHrtMark: ' + err);
        }
    };
    DrawingPad.prototype.addPoint = function (point) {
        try {
            if (this.android)
                this.android.addPoint(point);
        } catch (err) {
            console.log('Error in addPoint: ' + err);
        }
    };
    DrawingPad.prototype.update = function (point) {
        try {
            // console.log('update function');
            if (this.android)
                this.android.update();
        } catch (err) {
            console.log('Error in update: ' + err);
        }
    };
    DrawingPad.prototype.setGraphType = function (_type) {
        try {
            // console.log('update function');
            if (this.android)
                this.android.setGraphType(_type);
        } catch (err) {
            console.log('Error in setGraphType: ' + err);
        }
    };

    return DrawingPad;
}(drawingpad_common_1.DrawingPadBase));
exports.DrawingPad = DrawingPad;