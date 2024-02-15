const ol=document.querySelector('ol');

function getRandomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
ol.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.style.backgroundColor=getRandomRGBColor();
    }
});