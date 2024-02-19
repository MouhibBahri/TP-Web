const paragraph=document.querySelector("#content");
const fontSelector=document.querySelector("#fontSelector");
const colorSelector=document.querySelector("#colorSelector");
const numberSelector=document.querySelector("#numberSelector");

// paragraph.style.color=colorSelector.value;

fontSelector.addEventListener("change",()=>{
    paragraph.style.fontFamily=fontSelector.value;
});
colorSelector.addEventListener("change",()=>{
    paragraph.style.color=colorSelector.value;
});
numberSelector.addEventListener("change",()=>{
    paragraph.style.fontSize=numberSelector.value+"px";
})
