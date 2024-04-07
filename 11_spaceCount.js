function spaceCount(sentence) {
    var words = sentence.split(" ");
    var totalWords = words.length;
    var spaces = totalWords - 1;
    return spaces;
 }
 
 const value = spaceCount("Revision is the mother of Success");
 console.log(`Total number of spaces available in "Revision is the mother of Success": ${value}`);
 
 console.log("---------------------------------------------------------------------------------------");
 
 const value1 = spaceCount("JavaScript is the language of internet world");
 console.log(`Total number of spaces available in "JavaScript is the language of internet world": ${value1}`);
 console.log("---------------------------------------------------------------------------------------");

 