var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//stuff.forEach(function (item, index) {
//  if (index % 2 === 0) {
//    console.log(item);
//  }
//});

var things = [];
for (let item of stuff) {
  if (item.includes("s")) {
    things.push(item);
  }
}
console.log(things);

var stuffThings = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(stuffThings);
