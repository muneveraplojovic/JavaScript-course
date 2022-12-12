const combinaction = (a, b) => {
  const duzina = a.length > b.length ? a.length : b.length;
  let c = "";
  for (i = 0; i <= duzina; i++) {
    if (a[i] !== undefined && b[i] !== undefined) {
      c += a[i] + b[i];
    } else if (a[i] === undefined) {
      c += b[i];
    } else if (b[i] === undefined) {
      c += a[i];
    }
  }
  return c;
};
console.log(combinaction("PERA", "sladoled"));
