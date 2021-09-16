const section = document.querySelector('.section');
const boxes = document.querySelector('.boxes');
const buttons = document.querySelector('.buttons');
const btn = document.querySelectorAll('.btn');
const resizeBtn = document.querySelector('#resizeBtn');   

start();

function start() {
    let userInput = prompt("Please Choose Between 1 and 64");
    createGrid(userInput,userInput);

    resizeBtn.addEventListener('click', () => {
        let newInput = prompt("Please Choose Between 1 and 64");
        wipe();
        createGrid(newInput,newInput);
        blackColor();
        grayColor();
        rainbowColor();
        eraser();
        colorInput();
    });

    function createGrid(col,row){
        if (col >= 1 && col <= 64){
            for (let i = 0; i < (col * row); i++){
                const div = document.createElement('div');
                boxes.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
                boxes.style.gridTemplateRows = `repeat(${row}, 1fr)`;
                boxes.appendChild(div).classList.add('gridBox');
            }
        } else {
            window.location.reload(false);
        }
    };

    blackColor();
    function blackColor(){
        const gridBoxs = boxes.querySelectorAll(".gridBox");
        const blackBtn = document.querySelector('#blackBtn');
        blackBtn.addEventListener('click', () => {
        gridBoxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
            }))
        })
    };

    grayColor();
    function grayColor(){
        const gridBoxs = boxes.querySelectorAll(".gridBox");
        const grayBtn = document.querySelector('#grayBtn');
        grayBtn.addEventListener('click', () => {
        gridBoxs.forEach(box => box.addEventListener('mouseover', () => {
            const gray = Math.floor(Math.random() * 256)
            box.style.background = `rgb(${gray}, ${gray}, ${gray})`;
            }))
        })
    };

    rainbowColor();
    function rainbowColor(){
        const gridBoxs = boxes.querySelectorAll(".gridBox");
        const rainbowBtn = document.querySelector('#rainbowBtn');
        rainbowBtn.addEventListener('click', () => {
        gridBoxs.forEach(box => box.addEventListener('mouseover', () => {
            const R = Math.floor(Math.random() * 256);
            const G = Math.floor(Math.random() * 256);
            const B = Math.floor(Math.random() * 256);
            box.style.background = `rgb(${R}, ${G}, ${B})`;
            }))
        })
    };

    eraser();
    function eraser(){
        const gridBoxs = boxes.querySelectorAll(".gridBox");
        const eraserBtn = document.querySelector('#eraserBtn');
        eraserBtn.addEventListener('click', () => {
        gridBoxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
            }))
        })
    };

    colorInput();
    function colorInput(){
        const chooseColor = document.querySelector('#inputColor');
        chooseColor.addEventListener('input', function(){
            let inputColor = document.getElementById('inputColor').value;
            const gridBoxs = boxes.querySelectorAll(".gridBox");
            for (let i = 0; i < (userInput * userInput); i++) {
                gridBoxs[i].addEventListener('mouseover', function(event){
                    event.target.style.backgroundColor = inputColor;
                })
            }
        })
    };

    function wipe(){
        const gridBoxs = boxes.querySelectorAll(".gridBox");
        gridBoxs.forEach(box => box.remove())
        };
};