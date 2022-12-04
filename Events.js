// // text change with funcion an inline event handler

// const changeText = () => {
//     const p = document.querySelector('p');

//     p.textContent = "i changed because of the click!!!";
// }

// // now we can make use of event handler properties wihout adding any attributes to button

// // const button = document.querySelector('button');
// // button.onclick = changeText;

// // event listener example

// const button = document.querySelector('button');
// button.addEventListener('click', changeText);

// // Another

// button.addEventListener('click', () => {
//     p.textContent = 'Will I Change??';
// });

// multiple event listeners example

// const p = document.querySelector('p');
// const button = document.querySelector('button');

// const changeText = () => {
//     p.textContent = "Will i change?";
// }


// const alertText = () => {
//     alert('Will i alert?');
// }

// // multiple listeners on the same event and element

// // button.addEventListener('click', alertText);
// button.addEventListener('mouseenter', changeText);

// // removing event listener 

// button.removeEventListener('click', alertText);


const input = document.querySelector('input');
const log   = document.getElementById('log');
input.addEventListener('keydown', logkey);

function logkey (e) {
    log.textContent =+ `${e.key}.${e.code}`;
}


//  Pass an event through to a listener
document.addEventListener('keydown', event => {
	var element = document.querySelector('p');

	// Set variables for keydown codes
	var a = 'KeyA';
	var s = 'KeyS';
	var d = 'KeyD';
	var w = 'KeyW';

	// Set a direction for each code
	switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});