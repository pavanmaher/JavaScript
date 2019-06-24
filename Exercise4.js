class Form
{
	constructor()
	{
	    this.input=document.getElementsByTagName("input");
        this.button=document.getElementsByTagName("button")[0];

        this.input[0].addEventListener("input",this.check.bind(this));
        this.button.addEventListener("click",this.isValid.bind(this));
    }
    check()
    {
      let text=this.input[0].value;
      if(!isNaN(text)&&text!="")
      {
 	    this.input[1].value="True";
      }
      else
      {
       this.input[1].value="False";
      } 
    }

    isValid(event)
    {
      event.preventDefault();
      let text=this.input[0].value;
      if(!isNaN(text)&&text!="")
      {
 	    alert("submited");
        this.input[0].value="";
        this.input[1].value="False";
      }
      else
      {
        alert("not numeric");
      }
    }
}
let form=new Form();
