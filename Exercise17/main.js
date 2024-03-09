// *Question 16:** Changing Guest List:
var guests = ["Munawar", "Asif", "Sajid", "Ayaz"];
var unabletoAttend = "Munawar";
var newGuest = "Jamal";
guests[0] = newGuest;
guests.forEach(function (guests) {
    console.log("Dear Mr. ".concat(guests, ", \nyou are cardialy invited to join us for the dinner!\nThank You"));
});
console.log("Mr. ".concat(unabletoAttend, " can't make it to dinner."));
console.log("Good New! we find a more space so we are inviting 3 more guests");
guests.unshift("S.M. Shoaib");
guests.splice(3, 0, "Malik Imran");
guests.push("Rafiq");
guests.forEach(function (guests) {
    console.log("Dear Mr. ".concat(guests, ", \nyou are cardialy invited to join us for the dinner!\nThank You"));
});
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
