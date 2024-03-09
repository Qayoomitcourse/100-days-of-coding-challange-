// *Question 16:** Changing Guest List:

let guests : string [] = ["Munawar", "Asif", "Sajid", "Ayaz"]
let unabletoAttend =  "Munawar"
let newGuest = "Jamal"
guests[0] = newGuest

guests.forEach (guests =>{
    console.log(`Dear Mr. ${guests}, \nyou are cardialy invited to join us for the dinner!\nThank You`)
})
console.log(`Mr. ${unabletoAttend} can't make it to dinner.`)
console.log(`Good New! we find a more space so we are inviting 3 more guests`)
guests.unshift("S.M. Shoaib")
guests.splice(3, 0 , "Malik Imran")
guests.push("Rafiq")


guests.forEach (guests =>{
    console.log(`Dear Mr. ${guests}, \nyou are cardialy invited to join us for the dinner!\nThank You`)
})

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); 
