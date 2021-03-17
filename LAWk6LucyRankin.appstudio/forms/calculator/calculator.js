/*
lets user add or multiply 2 numbers, shows results, resets display after every use.
uses controls for ALL user input and output (no popups or console.log for user)
(at least button, label, input)
uses control events and event handler code. No code outside events. 
output prefaced with users' name

sketch GUI, id controls needed:
    - need two input controls  (for 2 numbers) with labels
    - need Add button
    - need Reset button
    - need control to display answer - bootstrap4 Alert? label? NSBMsg? 
*/

btnAdd.onclick=function() {
  num1 = parseNum(inptNum1.value)
  num2 = parseNum(inptNum2.value)
  lblAnswer.value = num1+num2
}

btnMultiply.onclick=function() {
  num1 = parseNum(inptNum1.value)
  num2 = parseNum(inptNum2.value)
  lblAnswer.value = Num1*Num2
}

btnClear.onclick=function() {
lblAnswer.value = ""}

