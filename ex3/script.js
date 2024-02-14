document.querySelector('button').addEventListener("click", ()=>{
    const name=document.getElementById("name");
    const content=document.getElementById("content");
    document.querySelector('.left').innerHTML+=`<span> ${name.value.toString()} : ${content.value.toString()}🗑</span>`;
    name.value=content.value="";
});

document.querySelector(".left").addEventListener("click", (event)=>{
    console.log(event.target.tagName);

    if (event.target.tagName==='SPAN'){
        event.target.parentNode.removeChild(event.target);
    }
})