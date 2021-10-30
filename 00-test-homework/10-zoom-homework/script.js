const container = document.createElement("div");
container.className = "container";
document.body.append(container);

function generateRandomColor() {
    const colorsMaxNumber = 16777216;
    const hexademicalSystem = 16;
    return `#${Math.floor(Math.random() * colorsMaxNumber).toString(hexademicalSystem)}`;
};

const generateBlocks = function (number) {
    const blocksNumberLine = Math.sqrt(number)

    if (!Number.isInteger(blocksNumberLine) || blocksNumberLine === 0) {
        console.log("Задана кількість квадратів неможлива");
        return;
    };
    const generateLine = function() {
    const column = document.createElement("div");
    column.className = "column"

    for (let i = 0; i < blocksNumberLine; i++) {
        const block = document.createElement("div");
        block.className = "block";
        block.style.background = generateRandomColor();
        column.prepend(block);
    };
    return column;
};
    const container = document.createElement("div");
    container.className = "container"

    for (let i = 0; i < blocksNumberLine; i++) {
        container.append(generateLine());
};
document.body.prepend(container);
};
generateBlocks(25);


const generateBlocksInterval = function(){
    const blocks = document.getElementsByClassName('block')
   
    setInterval(() => { 
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.background = generateRandomColor()   
    }  
    }, 1000);
   
};
generateBlocksInterval();
