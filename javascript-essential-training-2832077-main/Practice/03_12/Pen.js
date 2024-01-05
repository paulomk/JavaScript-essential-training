const Pen = class {
  //constructor and properties
  constructor(color, isLidOpen, inkLevel) {
    this.color = color;
    this.isLidOpen = isLidOpen;
    this.inkLevel = inkLevel;
  }
  //methods
  openPen() {
    if (!this.isLidOpen) {
      this.isLidOpen = true;
      console.log("Lid Opened");
    } else {
      console.log("Lid is already opened");
    }
  }

  closePen() {
    if (this.isLidOpen) {
      this.isLidOpen = false;
      console.log("Lid closed.");
    } else {
      console.log("lid is already closed.");
    }
  }

  draw() {
    if (this.inkLevel >= 1 && this.isLidOpen) {
      console.log("Drawing");
      this.inkLevel--;
    } else {
      console.log(
        "Cannot draw. Check if the lid was removed and your ink level."
      );
    }
  }

  showInkLevel() {
    console.log("Current ink level is: " + this.inkLevel);
  }
};
export default Pen;
