// *Question 18:** Changing Guest List:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Newzeeland", " Saudia Arab", " Japan", " England", " Germay"];
console.log('original: ' + places);
console.log('Alphabetical order: ' + __spreadArray([], places, true).sort());
console.log('original: ' + places);
console.log('Reverser alphabetical order: ' + __spreadArray([], places, true).sort().reverse());
console.log('original: ' + places);
console.log("Reversed order: " + __spreadArray([], places, true).sort().reverse());
console.log("Reversed order: " + __spreadArray([], places, true).sort().reverse());
console.log("Alphabetical order: " + places);
places.reverse();
console.log("Reverse alphabetical order: " + places);
