function countLetters(str){
  var splited = str.split(' ').join('');
  var output = {};

  for(var i = 0; i < splited.length; i++){
      if(!output.hasOwnProperty(splited[i])){
        output[splited[i]] = [i];
      }
      else output[splited[i]].push(i);
  }

    console.log(output);
}

countLetters("lighthouse in the house");