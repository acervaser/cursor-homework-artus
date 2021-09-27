let N = +(prompt('Введіть число N:'));

let M = +(prompt('Введіть число M:'));

let skipOddNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;


for ( let i = N; i <= M; i++) {
    if (skipOddNumber && (i % 2 === 0 )){
        continue;
    }
      sum +=i;  
}


document.writeln (`Сума чисел дорівнює ${sum}`);


