// chenage a butoon color by clicking the butoon 

// Step 1 - Create onload handle 

window.onload = () => {
    main();
}
function main(){
    const body = document.getElementById('body');
    const cmn_btn = document.getElementById('cmn-btn');

    cmn_btn.addEventListener('click', () => {
       const bgColor = GeneraRGBColor();
        body.style.backgroundColor=bgColor;
    })
}

// Step 2 - random Color Generator 

function GeneraRGBColor() {
    //  rgb(0,0,0 to 255,255,255);

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}

// Step 3 - Collect al necessary handle
// step 4 - Handle the click event 