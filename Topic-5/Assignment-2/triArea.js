const side1 = 5;
const side2 = 6;
const side3 = 7;

let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
document.write("Area of triangle with sides (5,6,7) :" + area);
