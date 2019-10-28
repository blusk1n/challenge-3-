var input = document.getElementById("input")
var button = document.getElementById("btn")
var ul = document.getElementById("ul")


button.onclick=function(){
	ul.textContent = input.value
}