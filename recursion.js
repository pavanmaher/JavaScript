const oddEven=function(a)
{
  if(a==0)
  return "Even";
  if(a==1)
  return "Odd";

  return oddEven(a-2);
}
console.log(oddEven(134));
