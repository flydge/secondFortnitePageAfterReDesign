/*

const dropdowns  = document.getElementsByClassName('topContent-container-navigation-topRow-dropdowns');

for (let i = 0; i < dropdowns[0].childElementCount ; i++) {

	const dropdown = dropdowns[0].children[i];
	dropdown.addEventListener('mouseover', ()=>{
		dropdown.firstElementChild.style.color='black';
		dropdown.firstElementChild.lastElementChild.style.color='black';
		dropdown.firstElementChild.style.zIndex='51';
		dropdown.lastElementChild.style.zIndex='50';
	});
	dropdown.addEventListener('mouseout', ()=>{
		dropdown.firstElementChild.style.color='white';
		dropdown.firstElementChild.lastElementChild.style.color='white';
		dropdown.firstElementChild.style.zIndex='21';
		dropdown.lastElementChild.style.zIndex='20';
	});
}
*/




var dropdowns = document.getElementsByClassName('topContent-container-navigation-topRow-dropdowns');

var _loop = function _loop(i) {

	var dropdown = dropdowns[0].children[i];
	dropdown.addEventListener('mouseover', function () {
		dropdown.firstElementChild.style.color = 'black';
		dropdown.firstElementChild.lastElementChild.style.color = 'black';
		dropdown.firstElementChild.style.zIndex = '51';
		dropdown.lastElementChild.style.zIndex = '50';
	});
	dropdown.addEventListener('mouseout', function () {
		dropdown.firstElementChild.style.color = 'white';
		dropdown.firstElementChild.lastElementChild.style.color = 'white';
		dropdown.firstElementChild.style.zIndex = '21';
		dropdown.lastElementChild.style.zIndex = '20';
	});
};

for (var i = 0; i < dropdowns[0].childElementCount; i++) {
	_loop(i);
}
