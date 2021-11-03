function getData(length) {
    let i = 0;
    let code = ""
while (i < length) { 
   code += Date.now().toString().slice(-5);
  i++;
}
    return +code
};
console.log(getData(1))