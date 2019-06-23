let selectionBox1=document.getElementById("first");
let selectionBox2=document.getElementById("second");

let button1=document.getElementById("add");
let button2=document.getElementById("remove");

button1.addEventListener("click",add);
button2.addEventListener("click",remove);

function add()
{

	let array=[];
	for(let i=0;i<selectionBox1.options.length;i++)
	{
		if(selectionBox1.options[i].selected==true)
		{
			selectionBox1.options[i].selected=false;
			array.push(selectionBox1.options[i]);	
		}
	}
	for(let i=0;i<array.length;i++)
	{
		selectionBox1.removeChild(array[i]);
	}
	for(let i=0;i<array.length;i++)
	{
		selectionBox2.appendChild(array[i]);
	}
}

function remove()
{

	let array=[];
	for(let i=0;i<selectionBox2.options.length;i++)
	{
		if(selectionBox2.options[i].selected==true)
		{
			selectionBox2.options[i].selected=false;
			array.push(selectionBox2.options[i]);	
		}
	}
	for(let i=0;i<array.length;i++)
	{
		selectionBox2.removeChild(array[i]);
	}
	for(let i=0;i<array.length;i++)
	{
		selectionBox1.appendChild(array[i]);
	}
}
