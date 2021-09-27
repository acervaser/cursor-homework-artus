let n = parseInt(prompt('Введіть число N:'));

let m = parseInt(prompt('Введіть число M:'));

let skipEvenNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;


for ( let i = n; i <= m; i++) {
    if (skipEvenNumber && (i % 2 === 0 )){
        continue;
    }
      sum +=i;  
}


document.writeln (`Сума чисел дорівнює ${sum}`);


