function classDecorator<T extends new(...args:any[]) =>{}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property"
        hello = "override"
        greet() {
            console.log(this.hello)
        }
    }
}

@classDecorator
class Greeter {
    property = "property"
    hello: string
    constructor(m: string) {
        this.hello = m
    }
}

const g = new Greeter('hello world')
console.log(g.hello)
// g.greet()