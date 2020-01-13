// add solution here
function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i in musicians){
    result.push(musicians[i]+ " plays " + instruments[i]);
  }
  return result;
}