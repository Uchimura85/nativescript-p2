function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var view_1 = require("ui/core/view");
var color_1 = require("color");
__export(require("ui/core/view"));
var DrawingPadBase = (function (_super) {
    __extends(DrawingPadBase, _super);

    function DrawingPadBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawingPadBase.prototype.getTransparentDrawing = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return DrawingPadBase;
}(view_1.View));
exports.DrawingPadBase = DrawingPadBase;
exports.penColorProperty = new view_1.Property({
    name: "penColor"
});
exports.penColorProperty.register(DrawingPadBase);
exports.penWidthProperty = new view_1.Property({
    name: "penWidth"
});
exports.penWidthProperty.register(DrawingPadBase);