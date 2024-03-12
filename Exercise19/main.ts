// *Question 19:** Dinner Guests

let guests : string [] = ["Yasir", "Asif", "Adnan"]

/*guests.forEach(guest =>{
    console.log (` Dear Mr. ${guest} would you like to join me for dinner.` )
})*/

let unableToAttend = "Yasir"
//console.log (`${unableToAttend} can't make it to dinner`)
let newGuest = "Munawar"
guests.unshift("Ayaz")
guests.splice(guests.length /2, 0, "Yaqoob")
guests.push("Aziz")

console.log (` I am inviting ${guests.length} people to dinner`)