module.exports = function check(str, bracketsConfig) {
    //setting an array for conversion
  let arr = [];
    //setting the closing pattern of brackets for deleting
  const r = [/ad/, /be/, /cf/, /gh/, /ij/, /kl/, /mm/, /nn/, /zz/]
    //translating the brackets array to letters string will help identifying the opening and closing brackets and using the string methods as tools
  for(let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      arr.push("a");
    }
    else if (str[i] == "[") {
      arr.push("b");
    }
    else if (str[i] == "{") {
      arr.push("c");
    }
    else if (str[i] == ")") {
      arr.push("d");
    }
    else if (str[i] == "]") {
      arr.push("e");
    }
    else if (str[i] == "}") {
      arr.push("f");
    }
    else if (str[i] == "|") {
      arr.push("z");
    }
    else if (str[i] == "1") {
      arr.push("g");
    }
    else if (str[i] == "2") {
      arr.push("h");
    }
    else if (str[i] == "3") {
      arr.push("i");
    }
    else if (str[i] == "4") {
      arr.push("j");
    }
    else if (str[i] == "5") {
      arr.push("k");
    }
    else if (str[i] == "6") {
      arr.push("l");
    }
    else if (str[i] == "7") {
      arr.push("m");
    }
    else if (str[i] == "8") {
      arr.push("n");
    }
  }
  arr = arr.join("");
  let m;
    //deleting recursive function
  function del() {
        //searching for the closing patterns
    for (let k = 0; k < r.length; k++) {
        //if doesn't exist any closing pattern do nothing and return the array
      if (r[0].test(arr) == false && r[1].test(arr) == false && r[2].test(arr) == false && r[3].test(arr) == false && r[4].test(arr) == false && r[5].test(arr) == false && r[6].test(arr) == false && r[7].test(arr) == false && r[8].test(arr) == false) return arr;
      else {
         //match the closing pattern for deleting
      m = arr.match(r[k]);
         //replacing the match with a blank space will delete the closing brackets
      arr = arr.replace(m,""); }
    }
        //if the array doesn't have more brackets return the array
    if (arr.length == 0) return arr;
        //this is the recursion, used for repeat the delete process
    else del();
  }
  del();
    //if the array doesn't have brackets before the deleting process it means the brackets closing pattern is correct, if else is incorrect
  return arr.length == 0 ? true : false;
}
