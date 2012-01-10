ilanguage = {};

ilanguage.Tokenizer = function() { };

ilanguage.Tokenizer.prototype.findSegmenter = function(corpus) {
  var frequencies = {};

  for (i in corpus){
    if(frequencies[corpus[i]] != null ){
      frequencies[corpus[i]] = parseInt(frequencies[corpus[i]]) + 1;
      
    }else{
      frequencies[corpus[i]] = 1;
    }
  }

  var mostFrequentCharCount = "1";
  var mostFrequentChar = " ";
  for (i in frequencies ){
    if(frequencies[i] > mostFrequentCharCount){
      mostFrequentCharCount= frequencies[i];
      mostFrequentChar = i;
    }
  }

  return  mostFrequentChar;
};
