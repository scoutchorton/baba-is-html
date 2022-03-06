//Handle quit and reload keybinds
document.addEventListener('keyup', e => {
	//Reload
	if(e.code === 'F5' || (e.code === 'KeyR' && e.ctrlKey)) {
		e.preventDefault();
		window.location.reload();
	} else if(e.ctrlKey && e.code === "KeyQ") {
		e.preventDefault();
		window.close();
	}
});

//Wait until page load
window.addEventListener('load', e => {
	console.log('Page initialized.');
});