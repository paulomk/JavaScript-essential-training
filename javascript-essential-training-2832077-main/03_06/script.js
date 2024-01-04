/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

//dot notation
console.log("The pocketNum value: ", backpack.pocketNum);
console.log("Strap lengh L: ", backpack.strapLength.left);

//bracket notation -> more control and functionalities
console.log("The pocketNum value: ", backpack["pocketNum"]);
console.log("Strap lengh L: ", backpack["strapLength"]["left"]);
//with bracket notation you can use a variable as a query to access a property. see bellow
let query = "pocketNum";
console.log(query + ": ", backpack[query]);
query = "color";
console.log(query + ": ", backpack[query]);

/*bracket notation also allows you to access properties that breaks convetions
e.g.: ["property-hypen"]
*/
