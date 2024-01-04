/**
 * Creates a cup object
 */
const cup = {
  shape: "square",
  capacityMl: "350",
  content: {
    sugarFree: false,
    ice: false,
  },
  currentLevel: 50, //0 - 100 -> percentage
  drink: function (amountDrunk) {
    if (amountDrunk <= this.currentLevel) {
      this.currentLevel -= amountDrunk;
      console.log(
        `You've drunk ${amountDrunk}% from your cup. Current level ${this.currentLevel}%.`
      );
    } else {
      console.log("Not enough content in the cup.");
    }
  },
  addIce: function () {
    this.content.ice = true;
  },
};

console.log("This is the current cup status: ", cup);
cup.drink(10);
cup.drink(99);
console.log("The current level is:", cup["currentLevel"] + "%");
