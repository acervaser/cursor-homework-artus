
function getRandomChinese(length) {
let string = ""
let promise = new Promise((resolve, reject) => { setInterval(() => {
  const sing = String.fromCharCode(Date.now().toString().slice(-5))
  string += sing 
  if(string.length === length){
    resolve(string)
    clearInterval(time)
  }
   }, 1000);
})
  promise.then((data) =>{
      console.log(data)
  }) 
}
getRandomChinese(4)


