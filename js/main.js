var doCoolStuff = function(){
	var currentClass = document.getElementById('boop').className;
	if(currentClass == 'cool'){
	document.getElementById('boop').className = 'cool red';		
	}
	else if(currentClass == 'cool red'){
	document.getElementById('boop').className = 'cool';
	}

}