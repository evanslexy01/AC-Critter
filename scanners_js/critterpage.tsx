var month = new Date().getMonth() + 1; //0 through 11
var hour = new Date().getHours(); //0 through 23
import { CritterInfo } from "critterdata";

var currentCritters = CritterInfo.filter(function (el) {
  return hour >= el.hourstart && hour <= el.hourend;
});
