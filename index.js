// add solution here
function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i in musicians){
    result.push(musicians[i]+ " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  let result = [];
  for(let fact of facts) {
    result.push(fact+"!!!")
  }
  return result;
}