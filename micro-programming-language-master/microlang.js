var __debug = true;
var __blank = null;

function compile(input) { 
  var codeline = [];
  var output = "";
  codeline = input.split("::"); 
  if (codeline[0] == "say") { 
	output = "alert(" + codeline[1] + "); ";
  }
  if (codeline[0] == "make variable") {
  	output = codeline[1] + " = null; ";
  }
  if (codeline[0] == "set variable") {
  	output = codeline[1] + " = " + codeline[2] + "; ";
  }
  if (codeline[0] == "run javascript") {
    output = codeline[1];
  }
  if (codeline[0] == "ask") {
    var prmpt = codeline[1]; //Gets the prompt from the user
    var exit = codeline[2];
    output = exit + " = prompt(" + prmpt + "); ";
  }
  if (codeline[0] == "start function") {
    output = "function " + codeline[1] + "(";
    for (var i = 2; i < codeline.length; i++) {
      if (codeline[i] == codeline.length) {
        output += codeline[i];
      } else { output += codeline[i] + ", "; }
    }
    output += "__blank) { ";
  }
  if (codeline[0] == "end") {
    output = "} ";
  }
  if (codeline[0] == "run function") {
    output = codeline[1] + "(";
    for (var i = 2; i < codeline.length; i++) {
      if (codeline[i] == codeline.length) {
        output += codeline[i];
      } else { output += codeline[i] + ", "; }
    }
    output += "__blank); ";
  }
  if (codeline[0] == "compare") {
    output = "if (" + codeline[1] + " == " + codeline[2] + ") {";
  }
  if (codeline[0] == "write") {
    output = "document.write(" + codeline[1] + "); ";
  }
  if (codeline[0] == "log") {
    output = "console.log(" + codeline[1] + "); ";
  }
  if (codeline[0] == "get by id") {
    output = codeline[2] + " = " + "document.getElementById(" + codeline[1] + "); ";
  }
  if (codeline[0] == "change contents") {
    output = codeline[1] + ".innerHTML = " + codeline[2] + "; ";
  }
  if (codeline[0] == "help") {
    alert("If you're not sure what to write, check out the doc.txt file, it has all the commands.\n Also, congratulations on finding this easter egg!");
  }
  if (codeline[0] == "make private variable") {
    output = "var " + codeline[1] + " = null; ";
  }
  return output;
}

function compandrun(codetext) {
  var codelines = [];
  codelines = codetext.split("\n");
  var compcode = "";
  for (var i = 0; i < codelines.length; i++) {
    compcode += compile(codelines[i]) + "\n";
  }
  if (__debug) {
    console.log(compcode);
  }
  eval(compcode);
}

function newcomp(codetext) {
  var codelines = [];
  codelines = codetext.split("\n");
  var compcode = "";
  for (var i = 0; i < codelines.length; i++) {
    compcode += newrun(codelines[i]) + "\n";
  }
  if (__debug) {
    console.log(compcode);
  }
  eval(compcode);
}
