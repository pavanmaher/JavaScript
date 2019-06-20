<!DOCTYPE html>
<html>
<body>

 <input type="checkbox"  value="sunday"onclick="myFunction(event);">sunday<br>
 <input type="checkbox"  value="monday" onclick="myFunction(event)">monday<br>
 <input type="checkbox"  value="tuesday" onclick="myFunction(event)">tuesday<br>
 <input type="checkbox"  value="wednesday" onclick="myFunction(event)">wednesday<br>
 <input type="checkbox"  value="thursday" onclick="myFunction(event)">thursday<br>
 <input type="checkbox"  value="friday" onclick="myFunction(event)">friday<br>
 <input type="checkbox"  value="saturday" onclick="myFunction(event)">saturday<br>
 <input type="checkbox"  value="none" onclick="myFunction(event)">none<br>
 <p id="demo"><p>
<script>
function myFunction(e) {
  let x = document.getElementsByTagName('input');
  if(e.currentTarget.value=="none")
  {
  	for(let i=0;i<x.length;i++)
    {
  	if(x[i].value!="none"&&x[i].checked==true)
    {
        x[i].checked=false;
    }
    }
    
    return false;
  }
  if(x[7].checked==true)
  {
  	x[7].checked=false;
  }
  let arr=[];
  let c=0;
  for(let i=0;i<x.length;i++)
  {
  	if(x[i]!=e.currentTarget&&x[i].checked==true)
    {
        arr.push(x[i].value);
        c++;
    }
  }
  if(c==3)
  {
  e.currentTarget.checked=false;
  alert(`Only 3 days can be selected.You have already selected ${arr[0]}, ${arr[1]} and
  ${arr[2]}`);
  }
  else
  {
    document.getElementById("demo").innerHTML=``;
  }
}
</script>
</body>
</html>

