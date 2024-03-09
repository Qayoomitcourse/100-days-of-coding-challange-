// *Question 15:** Changing Guest List:
var guests = ["Munawar", "Asif", "Sajid", "Ayaz"];
var unabletoAttend = "Munawar";
var newGuest = "Jamal";
guests[0] = newGuest;
guests.forEach(function (guests) {
    console.log("Dear Mr. ".concat(guests, ", \nyou are cardialy invited to join us for the dinner!\nThank You"));
});
console.log("Mr. ".concat(unabletoAttend, " can't make it to dinner."));
// let guests : string [] = ["Munawar", "Asif", "Sajid", "Ayaz"]
// let unableToAttend = "Munawar";
// let newGuest = "Jamal";
// // Replace the guest
// guests[guests.indexOf(unableToAttend)] = newGuest;
// // New invitations
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });
// console.log(`${unableToAttend} can't make it to dinner.`);
