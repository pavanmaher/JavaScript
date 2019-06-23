let outerDiv=document.getElementsByClassName("container")[0];
let button=document.getElementsByTagName("button")[0];

let count=0;
button.addEventListener("click",add);
function add()
{
    let element=document.createElement("div");
    element.classList.add("inner");
    element.innerText=count++;
    element.addEventListener("click",show);
    outerDiv.appendChild(element);
}
function show(event)
{
  alert(event.currentTarget.innerText);
}
