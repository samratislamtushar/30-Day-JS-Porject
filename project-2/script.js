// chenage a butoon color by clicking the butoon 

// Step 1 - Create onload handle 

window.onload = () => {
    main();
}
function main(){
    const body = document.getElementById('body');
    const cmn_btn = document.getElementById('cmn-btn');
    const result = document.getElementById('result');

    cmn_btn.addEventListener('click', () => {
       const bgColor = GeneraHexColor();
        body.style.backgroundColor=bgColor;
        result.value=bgColor;
    })
}

// Step 2 - random Color Generator 

function GeneraHexColor() {

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

// Step 3 - Collect al necessary handle
// step 4 - Handle the click event 