//a decorator is a function you apply to a class in a certain way
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
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
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = "Colton"

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log (pers)