import _ from "lodash";

// typescript doesn't know that we've added a GLOBAL var to index.html
// so we use 'declare' to make it work
// this can be done with any js packages that don't have a types package
declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);
