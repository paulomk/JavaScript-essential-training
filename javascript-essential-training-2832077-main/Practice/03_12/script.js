/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Footware from "./Footware.js";

const boots = new Footware("long boots", "boots", "grey", 8, false);
const sneakers = new Footware("running shoes", "shoes", "white", 6.5, false);
const rainingBoots = new Footware("raining boots", "boots", "blue", 8, true);
const winterBoots = new Footware("insulated boots", "boots", "brown", 8, false);

console.log(boots);
console.log(sneakers);
console.log(rainingBoots);
console.log(winterBoots);

boots.wear();
console.log(boots);
boots.clean();
console.log(boots);

import Pen from "./Pen.js";
const bluePen = new Pen("blue", false, 100);
const oldPen = new Pen("green", false, 1);
console.log(bluePen);
bluePen.draw();
bluePen.openPen();
bluePen.draw();
bluePen.draw();
bluePen.showInkLevel();
bluePen.closePen();

console.log(oldPen);
oldPen.openPen();
oldPen.draw();
oldPen.draw();
oldPen.showInkLevel();
oldPen.closePen();
