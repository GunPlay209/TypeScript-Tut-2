function sealed(target: Function) {
    Object.seal(target)
    Object.seal(target.prototype)
}

@sealed
class Greeter {
    message: string;

    constructor(message: string) {
        this.message = message
    }

    sayHi() {
        console.log(`Hallo, Nachricht ist: ${this.message}`)
    }
}

interface Greeter {
    foo(): number;
}

Greeter.prototype.foo = function () {
    return 0;
};

let greet1 = new Greeter("Guten Abend");
console.log(greet1.foo());
