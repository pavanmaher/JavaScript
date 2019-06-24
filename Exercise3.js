class Category
{
  constructor(className)
  {
    this.checkboxes=document.getElementsByClassName(className);
    for(let i=0;i<this.checkboxes.length;i++)
    {
     this.checkboxes[i].addEventListener("click",this.selectCategory.bind(this));
    }
  }
  selectCategory(event)
  {
    if(event.currentTarget.checked==true)
    {
      this.showList(event.currentTarget);
    }
    else
    {
      this.hideList(event.currentTarget);
    }
  }
  showList(category)
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
  hideList(category)
  {
  
    let items=document.getElementsByClassName(category.value);
    let classList=document.getElementsByClassName(category.value+" hide")[0];
    classList.style.display="none";
    for(let i=0;i<items.length;i++)
    {
      items[i].checked=false;
    }
  }
}
let category=new Category("parent");