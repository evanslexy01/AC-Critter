var month = new Date().getMonth() + 1; //1 through 12
var hour = new Date().getHours(); //0 through 23
import { CritterInfo } from "./critterdata";

// Pulls currently available in North critters
var currentNCritters = CritterInfo.filter(function (el) {
  return (
    el.hourstart <= hour &&
    el.hourend >= hour &&
    ((el.northstart <= month && el.northend >= month) ||
      (el.secondnorthstart <= month && el.secondnorthend >= month))
  );
});

//TODO figure out what to do about things that start at night and end in morning
//TODO make south work
//TODO figure out how to test this garbage
