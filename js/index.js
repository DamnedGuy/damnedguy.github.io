var header = document.getElementById('header'),
    button = document.querySelector('button');

//Name setter
function setName() {
    var name = prompt('Enter your login');
    localStorage.setItem('name', name);
    header.innerHTML = name;
}

if (localStorage.getItem('name')) {
    header.innerHTML = localStorage.getItem('name');
} else {
    setName()
}

button.onclick = setName;

