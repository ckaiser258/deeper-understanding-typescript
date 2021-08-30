import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import _ from "lodash";
import { Product } from "./product.model";

// typescript doesn't know that we've added a GLOBAL var to index.html
// so we use 'declare' to make it work
// this can be done with any js packages that don't have a types package
declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A Book", 12.99);

// const loadedProducts = products.map(
//   (product) => new Product(product.title, product.price)
// );

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
// console.log(p1.getInformation());
