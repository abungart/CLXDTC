let x = 1;

while (x <= 100) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("CLXDTC");
    x++;
  } else if (x % 3 === 0) {
    console.log("CLX");
    x++;
  } else if (x % 5 === 0) {
    console.log("DTC");
    x++;
  } else {
    console.log(x);
    x++;
  }
}
