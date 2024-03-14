var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(target) {
    Object.seal(target);
    Object.seal(target.prototype);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hallo, Nachricht ist: ".concat(this.message));
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
Greeter.prototype.foo = function () {
    return 0;
};
var greet1 = new Greeter("Guten Abend");
console.log(greet1.foo());
