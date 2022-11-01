// Returning critter entries of all types that are currently available according to device month and hour
// Second hour and second hemisphere account for some animals that are around 2 separate time periods, there's like 6 of them

// import { CritterInfo } from './critterdata'; // grabbing a metric ton of critter entries
// import { userConfig } from './userdata'; // grabbing boolean hemisphere

// const month = new Date().getMonth() + 1; // 1 through 12
// const hour = new Date().getHours(); // 0 through 23

// const seasonalCritters = CritterInfo.filter(function (el) {
//   if (userConfig['hemisphere'] === true)
//     return (
//       (el.northstart <= month && el.northend >= month) ||
//       (el.secondnorthstart <= month && el.secondnorthend >= month)
//     );
//   else
//     return (
//       (el.southstart <= month && el.southend >= month) ||
//       (el.secondsouthstart <= month && el.secondsouthend >= month)
//     );
// });

// const currentCritters = seasonalCritters.filter(function (el) {
//   if (el.hourstart < el.hourend)
//     return (
//       (hour >= el.hourstart && hour <= el.hourend) ||
//       (hour >= el.secondhourstart && hour <= el.secondhourend)
//     );
//   else
//     return (
//       hour >= el.hourstart ||
//       (hour >= 0 && hour <= el.hourend) ||
//       hour >= el.secondhourstart ||
//       (hour >= 0 && hour <= el.secondhourend)
//     );
// });

//TODO figure out how to test this garbage
