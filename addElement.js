<!DOCTYPE html>
<html>
<head>
<script>
function add()
{
	var para=document.createElement("p");
    var text=document.createTextNode("hello");
    para.appendChild(text);
    document.body.appendChild(para);
}
</script>
</head>
<body>

<h1>My First JavaScript</h1>

<button type="button"
onclick="add()">
Click me to display Date and Time.</button>

</body>
</html> 

