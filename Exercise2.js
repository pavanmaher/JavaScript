let days=document.getElementsByTagName("input");
for(let i=0;i<days.length;i++)
{
  days[i].addEventListener("click",restrictMoreThanThreeCheckboxes);
}

function restrictMoreThanThreeCheckboxes(event) {
  if(event.currentTarget.value=="none")
  {
  	for(let i=0;i<days.length;i++)
    {
  	if(days[i].value!="none"&&days[i].checked==true)
    {
        days[i].checked=false;
    }
    }
    
    return false;
  }
  if(days[7].checked==true)
  {
  	days[7].checked=false;
  }
  let checkedDays=[];
  let count=0;
  for(let i=0;i<days.length;i++)
  {
  	if(days[i]!=event.currentTarget&&days[i].checked==true)
    {
        checkedDays.push(days[i].value);
        count++;
    }
  }
  if(count==3)
  {
  event.currentTarget.checked=false;
  alert(`Only 3 days can be selected.You have already selected ${checkedDays[0]}, ${checkedDays[1]} and
  ${checkedDays[2]}`);
  }
  else
  {
    document.getElementById("demo").innerHTML=``;
  }
}
