//1. Найбільша цифра в числі

const getMaxDigit = (number) => {
    if (number === 0) {
      return 0;
    } else {
      return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
    }
  };
  
  //2. Ступінь числа

  const getPow = (x,y) =>{
  let result = 1;

  for(let i = 0; i < y ; i++) {
      result *=x; 
  }
  return result;
  };
 

  const getPow2 = (x1, n2)=> {
    if (n2 === 1) {
      return x1;
    } else {
      return x1 * getPow2(x1, n2 - 1);
    }
  }

  //3. Форматування імені
  
    const changeletter = (name = 'невідомо') =>{ 
    
    return(name[0]).toUpperCase() + name.toLowerCase().slice(1)};
 
  //4. Вирахування залишку 

       const remainder = (salary, tax1, tax2) =>{
       let tax1Given = (parseFloat(tax1)) * 0.01; 
       let tax2Given = (parseFloat(tax2)) * 0.01;
       return salary - salary * (tax1Given + tax2Given);
    }

     //5. Рандомне ціле число від N до M 

     const getrandomInteger = (n, m) => {
        
        let rand = n + Math.random() * (m + 1 - n);
        return Math.floor(rand);
     }
     
     //6. Підрахунок однакової букви в слові 

        const countLetter = (letter, word) => {
         let stringleter = (letter.toString()).toLowerCase();
         
         let stringWord = (word.toString()).toLowerCase();

         let sum = 0
        
         for (let char of stringWord) {
            if (char === stringleter)
            sum += 1;
        }

        return sum;
        
        };

        /*let stringleter = (letter.toString()).toLowerCase();

          let stringWord = (word.toString()).toLowerCase();

          let sum = 0
        
            for (let i = 0; i < stringWord.length; i++) {
                if (newketer[i] === stringleter) {
                    sum += 1;
                }
            }
        
            return sum;*/

console.log(`Функція №1: ${getMaxDigit(1236)}`);
console.log(`Функція №2(1): ${getPow(2, 6)}`);
console.log(`Функція №2(2): ${getPow(2, 6)}`);
console.log(`Функція №3: ${changeletter('вЛАД')}`);
console.log(`Функція №4: ${remainder(1000,"12.5%","5.6%")}`);
console.log(`Функція №5: ${getrandomInteger(1, 10)}`);
console.log(`Функція №6: ${countLetter('а', 'Асталавіста')}`);
         






