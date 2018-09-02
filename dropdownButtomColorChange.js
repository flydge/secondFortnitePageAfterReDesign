
const dropdown = document.getElementsByClassName('topContent-container-navigation-topRow-dropdowns-dropdown');
const button = document.getElementsByClassName('topContent-container-navigation-topRow-dropdowns-dropdown_button');
for (let i = 0; i < dropdown.length ; i++) {
    dropdown[i].addEventListener('mouseover', ()=>{
        button[i].style.color='black';

    });
    dropdown[i].addEventListener('mouseout', ()=>{
        button[i].style.color='white';

    })
}
