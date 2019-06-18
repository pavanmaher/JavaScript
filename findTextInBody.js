<!DOCTYPE html>
<html>
<head>
<script>
function find(node,string)
{
 if(node.nodeType==Node.ELEMENT_NODE)
 {
   for(let i=0;i<node.childNodes.length;i++)
   {
   		if(find(node.childNodes[i],string))
        {
        	return true;
        }
   }
   return false;
 }
 else if(node.nodeType==Node.TEXT_NODE)
 {
     if(node.nodeValue.indexOf(string)>-1)
     {
     	document.getElementById("demo").innerHTML = node.nodeValue.indexOf(string);
    	return true;
     }
     else
     return false;
 }
}
</script>
</head>
<body>

<p>Click the button to locate where in the string a specifed value occurs.</p>

<button onclick="find(document.body,'C')">Try it</button>

<p id="demo"></p>
</body>
</html>

