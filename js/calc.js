function dis(val){
	document.getElementById('dis').value += val;
}
function solve(){
	let x = document.getElementById('dis').value;
	let y = eval(x);
	document.getElementById('dis').value=y;
}
function clr(){
	document.getElementById('dis').value="";
}