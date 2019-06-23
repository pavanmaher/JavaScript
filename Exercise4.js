let input=document.getElementsByTagName("input");
let button=document.getElementsByTagName("button")[0];

input[0].addEventListener("input",check);
button.addEventListener("click",isValid);
function check()
{
 let text=input[0].value;
 if(!isNaN(text)&&text!="")
 {
 	input[1].value="True";
 }
 else
 {
 input[1].value="False";
 } 
}

function isValid(e)
{
 e.preventDefault();
 let text=input[0].value;
 if(!isNaN(text)&&text!="")
 {
 	alert("submited");
    input[0].value="";
    input[1].value="False";
 }
 else
 {
   alert("not numeric");
 }
}
