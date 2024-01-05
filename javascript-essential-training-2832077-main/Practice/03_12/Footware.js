const Footware = class {
  //constructor and properties
  constructor(name, type, color, size, isDirty) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.size = size;
    this.isDirty = isDirty;
  }
  //methods
  clean() {
    console.log(`Footware "${this.name}" was cleaned!`);
    this.isDirty = false;
  }
  wear() {
    console.log("You are wearing " + this.name);
    this.isDirty = true;
  }
};
export default Footware;
