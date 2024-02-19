const name=document.getElementById("name");
const content=document.getElementById("content");
const button=document.querySelector('button');
const inputs=document.querySelectorAll('input');
inputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        button.disabled = inputs[0].value.trim() === "" || inputs[1].value.trim() === "";

    })
});
button.addEventListener("click", ()=>{
    document.querySelector('#list').innerHTML+=`<span> ${name.value.trim()} : ${content.value.trim()} 🗑</span>`;
    name.value=content.value="";
    button.disabled=true;
});

document.querySelector("#list").addEventListener("click", (event)=>{

    if (event.target.tagName==='SPAN'){
        event.target.parentNode.removeChild(event.target);
    }
})