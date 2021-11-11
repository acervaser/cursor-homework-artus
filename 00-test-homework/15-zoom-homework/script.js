function* createIdGenerator () {
    let i = 1;
    while(i > 0) {
        yield i;
        i++
    }

}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);



function* newFontGenerator(fontSize) {
    let result = yield fontSize;
    while(true) {
        if(result === 'up') {
            fontSize += 2;
            result = yield fontSize
        }else if(result === 'down') {
            fontSize -= 2;
            result = yield fontSize
        }else result = yield fontSize;
    }
}
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
