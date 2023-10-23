function calculate() {
    let name =  prompt("what is your name?");
    var capitalizeFirstChar = name.slice(0,1);
    
    var upperCaseFirstChar = capitalizeFirstChar.toUpperCase();
    
    var restOfName = name.slice(1,name.length);
    
    restOfName = restOfName.toLowerCase();
    
    var capitalizedName = upperCaseFirstChar + restOfName;

  prompt("what is your Spouse name?");
 let loveScore = Math.random() * 100;
 loveScore = Math.floor(loveScore) + 1;



 if(loveScore > 70) {
    alert(capitalizedName + "," + " your love score is " + loveScore + "%");
    document.querySelector("h1").innerHTML = ("You love each other like there is no tomorrow!&#128525");

 }

 if(loveScore > 30 && loveScore < 70) {
    alert(capitalizedName + "," + " Your love score is " + loveScore + "%");
 }

 if(loveScore <= 30) {
    alert(capitalizedName + "," + " your love score is " + loveScore + "%");
    document.querySelector("h1").innerHTML = ("You go together like water and oil!&#128546");
 }


}







