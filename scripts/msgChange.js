let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla is cool, ' + myName;
	}

	if(!(localStorage.getItem('name'))) {
		setUserName();
	} else {
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla is cool, ' + storedName;
	}

}
