validator = "abcdefghjiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function isTranslateable(character) {
  return validator.indexOf(character) !== -1;
}
vowels = "aeiouyAEIOUY";
function isVowel(character) {
  return vowels.indexOf(character) !== -1;
}

aemap = new Array();
aemap["a"] = "e";  aemap["b"] = "p";  aemap["c"] = "s";  aemap["d"] = "t";
aemap["e"] = "i";  aemap["f"] = "w";  aemap["g"] = "k";  aemap["h"] = "n";
aemap["i"] = "u";  aemap["j"] = "v";  aemap["k"] = "g";  aemap["l"] = "c";
aemap["m"] = "l";  aemap["n"] = "r";  aemap["o"] = "y";  aemap["p"] = "b";
aemap["q"] = "x";  aemap["r"] = "h";  aemap["s"] = "m";  aemap["t"] = "d";
aemap["u"] = "o";  aemap["v"] = "f";  aemap["w"] = "z";  aemap["x"] = "q";
aemap["y"] = "a";  aemap["z"] = "j";  
aemap["A"] = "E";  aemap["B"] = "P";  aemap["C"] = "S";  aemap["D"] = "T";
aemap["E"] = "I";  aemap["F"] = "W";  aemap["G"] = "K";  aemap["H"] = "N";
aemap["I"] = "U";  aemap["J"] = "V";  aemap["K"] = "G";  aemap["L"] = "C";
aemap["M"] = "L";  aemap["N"] = "R";  aemap["O"] = "Y";  aemap["P"] = "B";
aemap["Q"] = "X";  aemap["R"] = "H";  aemap["S"] = "M";  aemap["T"] = "D";
aemap["U"] = "O";  aemap["V"] = "F";  aemap["W"] = "Z";  aemap["X"] = "Q";
aemap["Y"] = "A";  aemap["Z"] = "J";  

eamap = new Array();
eamap["a"] = "y";  eamap["b"] = "p";  eamap["c"] = "l";  eamap["d"] = "t";
eamap["e"] = "a";  eamap["f"] = "v";  eamap["g"] = "k";  eamap["h"] = "r";
eamap["i"] = "e";  eamap["j"] = "z";  eamap["k"] = "g";  eamap["l"] = "m";
eamap["m"] = "s";  eamap["n"] = "h";  eamap["o"] = "u";  eamap["p"] = "b";
eamap["q"] = "x";  eamap["r"] = "n";  eamap["s"] = "c";  eamap["t"] = "d";
eamap["u"] = "i";  eamap["v"] = "j";  eamap["w"] = "f";  eamap["x"] = "q";
eamap["y"] = "o";  eamap["z"] = "w";
eamap["A"] = "Y";  eamap["B"] = "P";  eamap["C"] = "L";  eamap["D"] = "T";
eamap["E"] = "A";  eamap["F"] = "V";  eamap["G"] = "K";  eamap["H"] = "R";
eamap["I"] = "E";  eamap["J"] = "Z";  eamap["K"] = "G";  eamap["L"] = "M";
eamap["M"] = "S";  eamap["N"] = "H";  eamap["O"] = "U";  eamap["P"] = "B";
eamap["Q"] = "X";  eamap["R"] = "N";  eamap["S"] = "C";  eamap["T"] = "D";
eamap["U"] = "I";  eamap["V"] = "J";  eamap["W"] = "F";  eamap["X"] = "Q"; 
eamap["Y"] = "O";  eamap["Z"] = "W";

promap = new Array();
promap["a"] = "ah";  promap["b"] = "bae";  promap["c"] = "ku";
promap["d"] = "de";  promap["e"] = "eay";  promap["f"] = "fe";
promap["g"] = "ge";  promap["h"] = "ha";  promap["i"] = "ee";
promap["j"] = "jae";  promap["k"] = "kuk";  promap["l"] = "lu";
promap["m"] = "m";  promap["n"] = "n";  promap["o"] = "oh";
promap["p"] = "pe";  promap["q"] = "q";  promap["r"] = "ra";
promap["s"] = "see";  promap["t"] = "te";  promap["u"] = "oo";
promap["v"] = "fu";  promap["w"] = "w";  promap["x"] = "x";
promap["y"] = "ae";  promap["z"] = "z";
promap["A"] = "AH";  promap["B"] = "BAE";  promap["C"] = "KU";
promap["D"] = "DE";  promap["E"] = "EAY";  promap["F"] = "FE";
promap["G"] = "GE";  promap["H"] = "HA";  promap["I"] = "EE";
promap["J"] = "JAE";  promap["K"] = "KUK";  promap["L"] = "LU";
promap["M"] = "M";  promap["N"] = "N";  promap["O"] = "OH";
promap["P"] = "PE";  promap["Q"] = "Q";  promap["R"] = "RA";
promap["S"] = "SEE";  promap["T"] = "TE";  promap["U"] = "OO";
promap["V"] = "FU";  promap["W"] = "W";  promap["X"] = "X";
promap["Y"] = "AE";  promap["Z"] = "Z";

const ESCAPESTART = "[";
const ESCAPEEND = "]";
function englishToAlbhed(s) {
  let parsing = true;
  let result = "";
  // Step through the text
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === ESCAPESTART) { parsing = false; }
    if (c === ESCAPEEND) { parsing = true; }
    if (!parsing) {
      result += c;
    } else {
      if (isTranslateable(c)) {
        result += eamap[c];
      } else {
        result += c;
      }
    }
  }
  return result;
}
function albhedToEnglish(s) {
  let parsing = true;
  let result = "";
  // Step through the text
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === ESCAPESTART) { parsing = false; }
    if (c === ESCAPEEND) { parsing = true; }
    if (!parsing) {
      result += c;
    } else {
      if (isTranslateable(c)) {
        result += aemap[c];
      } else {
        result += c;
      }
    }
  }
  return result;
}
function albhedToPronunciation(s) {
  let parsing = true;
  let result = "";
  let prev = 0;
  // Step through the text
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === ESCAPESTART) { parsing = false; }
    if (c === ESCAPEEND) { parsing = true; }
    if (!parsing) {
      result += c;
    } else {
      if (isTranslateable(c)) {
        let temp = promap[c];
        if (prev === 1) {
          if (!isVowel(temp.charAt(0)) && temp.length !== 1) {
            result += "-";
          }
        }
        result += temp;
        prev = 1;
      } else {
        result += c;
        prev = 0;
      }
    }
  }
  return result;
}

function transme() {
  if (document.theform.picker[0].checked) { // english to al bhed 
    builder = ""; toggler=0;

    for (var i=0; i < document.theform.stimulus.value.length; i++) {
      if (document.theform.stimulus.value.charAt(i)=="[") {toggler=1;};
      if (document.theform.stimulus.value.charAt(i)=="]") {toggler=0;};

      if (toggler==1) {builder=builder+document.theform.stimulus.value.charAt(i);}
      else {
        if (validator.indexOf(document.theform.stimulus.value.charAt(i))==-1)
          {builder=builder+document.theform.stimulus.value.charAt(i);}
        else
          {builder=builder+eamap[document.theform.stimulus.value.charAt(i)];};
      };
    };

    builder2 = ""; toggler=0; prev=0;

    for (var i=0; i < document.theform.stimulus.value.length; i++) {
      if (document.theform.stimulus.value.charAt(i)=="[") {toggler=1;};
      if (document.theform.stimulus.value.charAt(i)=="]") {toggler=0;};

      if (toggler==1) {builder2=builder2+document.theform.stimulus.value.charAt(i);}
      else {
        if (validator.indexOf(document.theform.stimulus.value.charAt(i))==-1)
          {builder2=builder2+document.theform.stimulus.value.charAt(i);
           prev=0;}
        else
          {temp = promap[eamap[document.theform.stimulus.value.charAt(i)]];
           if (prev==1) {if ((vowels.indexOf(temp.charAt(0))==-1) && (temp.length!=1)) {builder2=builder2+"-";};};
           builder2=builder2+temp;
           prev=1;
          };
      };      
    };
    document.theform.response.value=builder+"\n\nPronounced: \""+builder2+"\"";

  } else { //al bhed to english
    builder = ""; toggler=0;

    for (var i=0; i < document.theform.stimulus.value.length; i++) {
      if (document.theform.stimulus.value.charAt(i)=="[") {toggler=1;};
      if (document.theform.stimulus.value.charAt(i)=="]") {toggler=0;};

      if (toggler==1) {builder=builder+document.theform.stimulus.value.charAt(i);}
      else {
        if (validator.indexOf(document.theform.stimulus.value.charAt(i))==-1)
          {builder=builder+document.theform.stimulus.value.charAt(i);}
        else
          {builder=builder+aemap[document.theform.stimulus.value.charAt(i)];};
      };
    };
    document.theform.response.value=builder;
  };
  return false;  
};

