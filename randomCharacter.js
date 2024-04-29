const characters = ['bloodhound','ash','wraith','ballistic','catalyst','vantage','caustic',
'mad maggie','mirage','seer','octane','wattson','loba','horizon','gibraltar','bangalore','fuse','pathfinder',
'lifeline','valkyrie','rampart','revenant','new castle'];

const rand = Math.floor(Math.random() * characters.length + 1);
const h2 = document.querySelector('h2');

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*5);
    const b = Math.floor(Math.random()*20);

    /* note the paranths(top left corner of keyboard) to create temperant literal string*/
    return `0px 0px 20px rgb(${r},${g},${b})`;
}

let randomCharacter = function(){
    function getRandomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        /* note the paranths(top left corner of keyboard) to create temperant literal string*/
        return `0px 0px 20px rgb(${r},${g},${b})`;
    }
    let count = 0;
    let randPos = Math.random() *550;
    let randX = Math.random() *800;
    h2.style.textShadow = getRandomColor();
    h2.style.textDecoration = `none`;
    const interval = setInterval(function(){
        count++;    
        const rand = Math.floor(Math.random() * characters.length);
        h2.innerText = characters[rand].toUpperCase();
    
        if(count > 20){
            clearInterval(interval);
        }
    },30);
    
}
document.addEventListener('click',randomCharacter);
document.addEventListener('mousedown',function(){
    h2.style.fontSize = '8vh';   
});
document.addEventListener('mouseup',function(){
    h2.style.fontSize = '10vh';

});
document.addEventListener('mousemove',function(shade){

    /* declare the red tones that will be effected by x position of the mouse */
    const r = Math.round(shade.pageX * 100 / window.innerWidth);
    const g = Math.round(shade.pageY * 30 / window.innerWidth);
    /* declare the blue tones that will be effected by the y position of the mouse */
    const b = Math.round(shade.pageY * 10 / window.innerHeight);

    

    /* declare the color as and RGB color graph where both red and blue are determined by mouse positioning*/
    const color = `rgb(${r},${g},${b})`;
    /* change background color of body to current 'color' */
    document.body.style.backgroundColor = color;
    console.log(color);
})