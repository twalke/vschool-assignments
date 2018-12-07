function noDuplicates(str) {
  // var char = "aaavsvvssff"; //Input string
     var unique=str.charAt(0);
     for(var i=1;i<str.length;i++){
         var isExist = unique.search(str.charAt(i));
          isExist >=0 ?0:(unique +=  str.charAt(i) );
     }
return unique;
}

module.exports = {
    noDuplicates
}
