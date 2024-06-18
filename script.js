//your JS code here. If required.
const modal = document.getElementById("myModal")
const button = document.getElementById("openModal")
const close = document.getElementById("closeModal")
close.addEventListener('click',(e)=>{
	modal.style.display = "none"
})
document.addEventListener('click',(e)=>{
	if(!modal.contains(e.target) && !button.contains(e.target)){
		modal.style.display = "none"
	}
})

button.addEventListener('click',()=>{
	modal.style.display = "block"	
})