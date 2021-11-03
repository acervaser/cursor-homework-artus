
/*Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.
(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms*/

 /*function getRandomChinese(length) {
    let string = "";
     let i = 0
 while (i < length) { 
 let p = setInterval(() => {

        let sing = String.fromCharCode(Date.now().toString().slice(-5)) 
     string += sing
         }, 2000);
         i++   
}
  return string  
}
console.log(getRandomChinese(4))*/
function getRandomChinese(length) {
let string = ""
const time = setInterval(() => {
    
  let sing = String.fromCharCode(Date.now().toString().slice(-5))
  string += sing 
  if(string.length === length){
    console.log(string)
  }
   }, 2000);
}
console.log(getRandomChinese(4))
   