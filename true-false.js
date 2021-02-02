//Falsy 
// 0
// ""
//false
// no variable value (undefined)
// null
// Truthy
// "0"
// ' ' (white space)
// [] (array)
// {} (object)
// 'false' (this is string so its true)
// true (declare)
// conditional check

const sName = 0;
if (sName || sName == 0) {
    console.log("This condition is true");
} else {
    console.log("This is condition is false");
}