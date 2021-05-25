//a decorator is a function you apply to a class in a certain way
function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

// decorators execute when you define an object, not when you create it (with new Person())
@Logger
class Person {
    name = "Colton"

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log (pers)