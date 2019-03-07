function countLetters(str){
  var splited = str.split(' ').join('');
  var output = {};

  for(var i = 0; i < splited.length; i++){
      if(!output.hasOwnProperty(splited[i])){
        output[splited[i]] = 1;
      }
      else output[splited[i]] += 1;
  }

    console.log(output);
}

countLetters("lighthouse in the house");