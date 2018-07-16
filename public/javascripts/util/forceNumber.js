function forceNumber(event){

	var key = event.which || event.keyCode;
	
//	console.log('forceInteger::: key selected->  ' + key);
//	console.log('valor: ' + valor);
//	console.log('e: ' + event);
	
	if(!event.shiftKey && !event.altKey && key >= 48 && key <= 57 || 
			key >= 96 && key <= 105 || key == 8 || key == 9 || key == 13 || key == 35 || key == 36 ||
			key == 37 || key == 38 || key == 39 || key == 40 || key == 46 || key == 45) {
	
		return true;
	}
	
	//ctrl + v
	if(event.ctrlKey && key == 86) {
		return true;
	}
	
	//ctrl + c
	if(event.ctrlKey && key == 67) {
		return true;
	}
	//ctrl + z
	if(event.ctrlKey && key == 90) {
		return true;
	}
	
	//Esc key
	if(key == 27) {
		return true;
	}
	
//	, key // 188 ,   199 .
	if(key == 188 && event.target.value.indexOf(',') < 0) {
		return true;
	}
	
	if(key == 190 && event.target.value.indexOf('.') < 0) {
		return true;
	}
	return false;
}