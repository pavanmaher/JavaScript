let checkboxes=document.getElementsByClassName("parent");
for(let i=0;i<checkboxes.length;i++)
{
  checkboxes[i].addEventListener("click",selectCategory);
}
function selectCategory(event)
{
    if(event.currentTarget.checked==true)
    {
      showList(event.currentTarget);
    }
    else
    {
      hideList(event.currentTarget);
    }
}
function showList(category)
{
  
  let items=document.getElementsByClassName(category.value);
    let classList=document.getElementsByClassName(category.value+" hide")[0];
    classList.style.display="block";
    category.scrollIntoView(true)
    for(let i=0;i<items.length;i++)
    {
      items[i].checked=true;
    }
}
function hideList(category)
{
  
  let items=document.getElementsByClassName(category.value);
    let classList=document.getElementsByClassName(category.value+" hide")[0];
    classList.style.display="none";
    
    for(let i=0;i<items.length;i++)
    {
      items[i].checked=false;
    }
}
