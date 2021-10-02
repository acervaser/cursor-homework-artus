//1. Найбільша цифра в числі

const getMaxDigit = (number) => {
    if (number === 0) {
      return 0;
    } else {
      return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
    }
  };
  
  console.log(getMaxDigit(9123569));

  //2. Ступінь числа

  const pow = (x,y) =>{
  let result = 1;

  for(let i = 0; i < y ; i++) {
      result *=x; 
  }
  return result;
  };
  console.log(pow(6,2));

  const pow2 = (x1, n2)=> {
    if (n2 === 1) {
      return x1;
    } else {
      return x1 * pow2(x1, n2 - 1);
    }
  }
  console.log(pow2(6,2));
  
  //3. Форматування імені
  
  const changeletter = (name = 'невідомо') =>{ 
    
    return(name[0]).toUpperCase() + name.toLowerCase().slice(1)};
 
    console.log(changeletter ());

      //4. Вирахування залишку 

      const remainder = (salary, tax1, tax2) =>{
       let tax1Given = (parseFloat(tax1))*0.01; 
       let tax2Given = (parseFloat(tax2))*0.01;
       return salary - salary*(tax1Given + tax2Given);
    }
    console.log(remainder (1000,"12.3%","2.3%" ));

     //5. Рандомне ціле число від N до M 

     function randomInteger(n, m) {
        
        let rand = n + Math.random() * (m + 1 - n);
        return Math.floor(rand);
     }
     console.log(randomInteger (1,10));


