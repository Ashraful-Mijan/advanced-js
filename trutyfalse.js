// *** False
// 0 : number is return false;
// "": empty string is return false;
// undefined: is return false;
// null: is return false;
// NaN: is return false;

// *** Truthy
//' ', '0', [], {};

let name = 12;
if (name || name == 0) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}