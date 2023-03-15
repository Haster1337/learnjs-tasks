let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(prop){
  return function(a, b){
    return a[prop] > b[prop] ? 1 : -1;
  };
}
