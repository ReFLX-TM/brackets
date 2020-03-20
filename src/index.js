module.exports = function check(str, bracketsConfig) {
  let arr = [];
  const r = [/ad/, /be/, /cf/, /gh/, /ij/, /kl/, /mm/, /nn/, /zz/]
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
  function del() {
    for (let k = 0; k < r.length; k++) {
      if (r[0].test(arr) == false && r[1].test(arr) == false && r[2].test(arr) == false && r[3].test(arr) == false && r[4].test(arr) == false && r[5].test(arr) == false && r[6].test(arr) == false && r[7].test(arr) == false && r[8].test(arr) == false) return arr;
      else {
      m = arr.match(r[k]);
      arr = arr.replace(m,""); }
    } 
    if (arr.length == 0) return arr;
    else del();
  }
  del();
  return arr.length == 0 ? true : false;
}
