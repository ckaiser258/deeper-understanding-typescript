//a decorator is a function you apply to a class in a certain way
//decorators execute bottom up
function Logger(logString: string) {
    // the below is a factory function
    // factory functions run earlier than the decorator itself
    console.log('LOGGER FACTORY')
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('TEMPLATE FACTORY')
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

// decorators execute when you define an object, not when you create it (with new Person())
// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = "Colton"

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log (pers)

function Log(target: any, propertyName: string | Symbol) {
console.log('Property decorator!')
console.log(target, propertyName)
}

class Product {
    @Log
    // logs the contents of the class and "title"
    // since "target" is this class and "propertyName" is the property directly below the decorator ("title")
    title: string
    private _price: number

    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}