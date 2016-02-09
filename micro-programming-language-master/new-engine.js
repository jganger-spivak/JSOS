dblcolon = ":" + ":"; 

function newrun(input, __blank) { 
codeline = []; 
output = null; 
codeline = input.split(dblcolon); 
outputproc(codeline, __blank);
variablesproc(codeline, __blank);
eval(output);
} 

var code = null; 
code = prompt("Enter your code:"); 
newrun(code, __blank); 

function inputproc(input, __blank) { 

} 

function outputproc(input, __blank) { 
if (input[0] == "say") {
output = "alert(" + input[1] + "); "; 
} 

if (input[0] == "write") {
output = "document.write(" + input[1] + "); "; 
} 

if (input[0] == "log") {
output = "console.log(" + input[1] + "); "; 
} 

if (input[0] == "change contents") {
output = input[1] + ".innerHTML = " + input[2] + "; "; 
} 
} 

function variablesproc(input, __blank) { 
if (input[0] == "make variable") {
output = input[1] + " = null; "; 
} 

if (input[0] == "set variable") {
output = input[1] + " = " + input[2] + "; "; 
} 

if (input[0] == "make private variable") {
output = "var " + input[1] + " = null; "; 
} 
} 

function otherproc(input, __blank) { 

} 

function functionsproc(input, __blank) { 

} 

function domproc(input, __blank) { 

} 