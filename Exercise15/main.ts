// *Question 15:** Changing Guest List:

let guests : string [] = ["Munawar", "Asif", "Sajid", "Ayaz"]
let unabletoAttend =  "Munawar"
let newGuest = "Jamal"
guests[0] = newGuest

guests.forEach (guests =>{
    console.log(`Dear Mr. ${guests}, \nyou are cardialy invited to join us for the dinner!\nThank You`)
})
console.log(`Mr. ${unabletoAttend} can't make it to dinner.`)
