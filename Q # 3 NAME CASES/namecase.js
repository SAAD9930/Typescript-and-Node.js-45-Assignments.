"use strict";
//lower case
let personName = "saad";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
