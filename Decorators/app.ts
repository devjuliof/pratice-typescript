// function Logger(logString: string) {
//     return function(constructor: Function) {
//         console.log(logString)
//         console.log(constructor.toString())
//     }
// }
//
// function WithTemplate(template: string, hookId: string) {
//     return function(constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }
//
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// @Logger('LOGGING - PERSON')
// class Person {
//     name = 'Max';
//
//     constructor() {
//         console.log('creating a person')
//     };
// }
//
// const pers = new Person();
//
// console.log(pers)