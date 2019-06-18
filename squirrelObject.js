let journal = [];
function addEntry(events, squirrel) {
journal.push({events, squirrel});
}

function corelation(arr)
{
 let ans=arr[0]*arr[3];
 ans= ans-(arr[1]*arr[2]);
 let divident=((arr[0]+arr[1])*(arr[1]+arr[3])*(arr[2]+arr[3])*(arr[0]+arr[2]));
 divident=Math.sqrt(divident);
 ans=ans/divident;
 return ans;
}

function tableFor(event)
{
  let table=[0,0,0,0];
  for(let i=0;i<journal.length;i++)
  {
    let entry=journal[i],index=0;
    if(entry.events.includes(event)) index++;
    if(entry.squirrel) index+=2;
    table[index]++;
  }
  return table;
}

function allEvents()
{
  let eventList=[];
  for(let i=0;i<journal.length;i++)
  {
    for(let j=0;j<journal[i].events.length;j++)
    {
      if(!eventList.includes(journal[i].events[j]))
      {
        eventList.push(journal[i].events[j]);
      }
    }
  }
  return eventList;
}

addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

let eventList=allEvents();
for(let i=0;i<eventList.length;i++)
{
  console.log(corelation(tableFor(eventList[i]))+"       "+eventList[i]);
}

