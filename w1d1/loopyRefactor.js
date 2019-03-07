function loopyRefactor(range, multiples, words){
  for(var i = range[0]; i <= range[1]; i++){
    var text = '';
    if(i % multiples[0] === 0){
      text += words[0];
    }
    if(i % multiples[1] === 0){
      text += words[1];
    }
    console.log(text === ''? i: text);
  }
}

loopyRefactor([15, 20], [2, 5], ["Batty", "Beacon"]);