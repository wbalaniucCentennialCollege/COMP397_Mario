var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ground = (function (_super) {
        __extends(Ground, _super);
        function Ground() {
            _super.call(this, "ground");
            this.defaultPosition = new objects.Vector2(0, 538);
            this.position = this.defaultPosition;
        }
        return Ground;
    }(objects.GameObject));
    objects.Ground = Ground;
})(objects || (objects = {}));
//# sourceMappingURL=ground.js.map