/*
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
*/

/*
uses control for user input.
if user is a member, adds name to array.
if user is not a member, tells them so in a popup. 
contains an event handler and event handler code.
*/

let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
btnMember.onclick=function() {
if (members.includes(inptMember.value)) {
lblMember.value = "You are a member!"
} else {
  members.push(inptMember.value)
  lblMember.value = "You have been added as member."}
}

