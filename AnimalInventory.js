function printAnimalCountMap(cow,chiken)
{
  let cows=String(cow);
  let chikens=String(chiken);
    while(cows.length<3)
    cows="0"+cows;
    console.log(cows,"cows");
    while(chikens.length<3)
    chikens="0"+chikens;
    console.log(chikens,"cows");
}
printAnimalCountMap(997,50);
