const n = parseInt(prompt('Введіть число N:'));

const m = parseInt(prompt('Введіть число M:'));

const skipEvenNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;


for ( let i = n; i <= m; i++) {
    if (skipEvenNumber && (i % 2 === 0 )){
        continue;
    }
      sum +=i;  
}


document.writeln (`Сума чисел дорівнює ${sum}`);


