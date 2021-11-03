
function getRandomChinese(length) {
let string = ""
const time = setInterval(() => {
  const sing = String.fromCharCode(Date.now().toString().slice(-5))
  string += sing 
  if(string.length === length){
    console.log(string)
    clearInterval(time)
  }
   }, 50);
   return "Homework#13"
}
console.log(getRandomChinese(4))
   