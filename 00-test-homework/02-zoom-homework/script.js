const n = +prompt('Введіть число N:');

do{
    n 
}while(!Number.isInteger(n));

const m  = +prompt('Введіть число M:')

do{
    m 
}while(!Number.isInteger(m) || (m > n));


const skipEvenNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;


for ( let i = n; i <= m; i++) {
    if (skipEvenNumber && (i % 2 === 0 )){
        continue;
    }
      sum +=i;  
}


document.writeln (`Сума чисел дорівнює ${sum}`);


