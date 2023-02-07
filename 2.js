const fs = require('fs')
function func(func){
  console.log (func)
  if (func>=0){console.log ("110")}
  else if(func==0){console.log ("240")}
  else {console.log ("789")}
}
func(1)
func(0)
func("1789")
function func2(func2, func3){
  console.log (func2 * func3)
}
func2(12,98)
fs.writeFileSync('result.txt', "func2");





let data = fs.readFileSync("result.txt", "utf8");
    console.log(data);