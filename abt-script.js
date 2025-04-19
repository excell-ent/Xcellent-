
function cancel(){
	const sideBar = document.querySelector('.side-bar');
		sideBar.style.display = 'none';
}
function menuDisplay(){
	const sideBar = document.querySelector('.side-bar');
	sideBar.style.display = 'flex';
}
function nightMode(){
	if (document.title === 'About') {
		document.body.style.background = 'linear-gradient(to bottom right, #332222, rgba(15, 10, 10, 0.781)) no-repeat fixed';
		document.body.style.color = "white";	/*document.querySelector('footer').style.background = 'linear-gradient(to bottom right,#44171f45, #54072354)';*/
	/*document.querySelector('section').style.color = '#ffeeee';*/
		document.title = 'Abouts';
	} else if (document.title === 'Abouts') {
		document.body.style.background = '';
		document.body.style.color = "";
		document.body.style.opacity = '1';
		document.title = 'About'
/*	document.querySelector('footer').style.background = ''*/;
	}

};


