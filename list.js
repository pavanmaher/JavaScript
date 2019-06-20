<!DOCTYPE html>
<html>
<head>
<style>
.divc
{
width:300px;
height:120px;
border: solid 1px;
position:relative;
overflow-y: scroll;
}
.parent
{
}
.color
{
}
.bikes
{
}
.drinks
{
}
.movies
{
}
.hide
{
list-style:none;
display:none;
}
</style>
<script>

function fun(e)
{
	let x=document.getElementsByClassName("parent");
    for(let i=0;i<x.length;i++)
    {
    	if(x[i]==e.currentTarget)
        {
          if(x[i].checked==true)
          {
            showList(x[i]);
          }
          else
          {
          	hideList(x[i]);
          }
        }
    }
}
function showList(x)
{
	
	let c=document.getElementsByClassName(x.value);
    let u=document.getElementsByClassName(x.value+" hide")[0];
    u.style.display="block";
    x.scrollIntoView(true)
    for(let i=0;i<c.length;i++)
    {
    	c[i].checked=true;
    }
}
function hideList(x)
{
	
	let c=document.getElementsByClassName(x.value);
    let u=document.getElementsByClassName(x.value+" hide")[0];
    u.style.display="none";
    
    for(let i=0;i<c.length;i++)
    {
    	c[i].checked=false;
    }
}
</script>
</head>

<body>
<div class="divc">
<ul style="list-style:none">
  <div>
  <li>
    <input type="checkbox" class="parent" value="color" onclick="fun(event);"> color
  </li>
  <ul class="color hide">
  	<li>
    <input type="checkbox" class="color" value="red" onclick="fun(event);"> red
    </li>
    <li>
    <input type="checkbox" class="color" value="yellow" onclick="fun(event);"> yellow
    </li>
    <li>
    <input type="checkbox" class="color" value="green" onclick="fun(event);"> green
    </li>
    <li>
    <input type="checkbox" class="color" value="blue" onclick="fun(event);"> blue
    </li>
  </ul>
  </div>
  
  
  <div>
  <li>
    <input type="checkbox" class="parent" value="drinks" onclick="fun(event);"> drinks
  </li>
  <ul class="drinks hide">
  	<li>
    <input type="checkbox" class="drinks" value="dew" onclick="fun(event);"> dew
    </li>
    <li>
    <input type="checkbox" class="drinks" value="cola" onclick="fun(event);"> cola
    </li>
    <li>
    <input type="checkbox" class="drinks" value="pepsi" onclick="fun(event);"> pepsi
    </li>
    <li>
    <input type="checkbox" class="drinks" value="sprite" onclick="fun(event);"> sprite
    </li>
  </ul>
  </div>
  
  
  <div id="ab">
  <li>
    <input type="checkbox" class="parent" value="movies" onclick="fun(event);"> movies
  </li>
  <ul class=" movies hide">
  	<li>
    <input type="checkbox" class="movies" value="hollywood" onclick="fun(event);"> hollywood
    </li>
    <li>
    <input type="checkbox" class="movies" value="bollywood" onclick="fun(event);"> bollywood
    </li>
    <li>
    <input type="checkbox" class="movies" value="tollywood" onclick="fun(event);"> tollywood
    </li>
    <li>
    <input type="checkbox" class="movies" value="sandalwood" onclick="fun(event);">sandalwood
    </li>
  </ul>
  </div>
  
  
  <div>
  <li>
    <input type="checkbox" class="parent" value="bikes" onclick="fun(event);"> bikes
  </li>
  <ul class="bikes hide">
  	<li>
    <input type="checkbox" class="bikes" value="hero" onclick="fun(event);"> dew
    </li>
    <li>
    <input type="checkbox" class="bikes" value="suzuki" onclick="fun(event);"> cola
    </li>
    <li>
    <input type="checkbox" class="bikes" value="yamaha" onclick="fun(event);"> pepsi
    </li>
    <li>
    <input type="checkbox" class="bikes" value="splendar" onclick="fun(event);"> sprite
    </li>
  </ul>
  </div>
</ul>
</div>
</body>
</html> 

