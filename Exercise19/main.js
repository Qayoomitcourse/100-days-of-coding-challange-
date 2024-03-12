// *Question 19:**
var guests = ["Yasir", "Asif", "Adnan"];
/*guests.forEach(guest =>{
    console.log (` Dear Mr. ${guest} would you like to join me for dinner.` )
})*/
var unableToAttend = "Yasir";
//console.log (`${unableToAttend} can't make it to dinner`)
var newGuest = "Munawar";
guests.unshift("Ayaz");
guests.splice(guests.length / 2, 0, "Yaqoob");
guests.push("Aziz");
console.log(" I am inviting ".concat(guests.length, " people to dinner"));
