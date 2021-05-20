let submitBtn = document.querySelector('button');
let feed = document.querySelector('.feed');
let form = document.querySelector('form')
let input = document.querySelector('input')
let hamburger = document.querySelector('.hamburger')
let sideMenu = document.querySelector('.sidebar')
let closeBtn = document.querySelector('.closeBtn')
console.log(hamburger);


loadEventListeners();

// load all eventlistners
function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getComments)
}

function getComments() {
    let comments = [];
    if (localStorage.getItem('comments') === null) {
        comments = [];
    } else {
        comments = JSON.parse(localStorage.getItem('comments'));
    }

    (comments).map((comment) => {
        let div = document.createElement('div');
        div.className = 'comment';
        let p = document.createElement('p');
        p.innerHTML = comment;
        let hr = document.createElement('hr');
        div.appendChild(p);
        div.appendChild(hr)
        console.log(div);
        feed.insertBefore(div, form)


    })
}


submitBtn.addEventListener('click', (e) => {

    if (e.target.className === 'submitBtn') {
        if (input.checkValidity()) {
            input.setCustomValidity('');
            input.reportValidity()
            let text = e.target;
            console.log(text);
            let inputValue = input.value;
            console.log(input.checkValidity());
            let div = document.createElement('div');
            div.className = 'comment';
            let p = document.createElement('p');
            p.innerHTML = inputValue;
            let hr = document.createElement('hr');
            div.appendChild(p);
            div.appendChild(hr)
            console.log(div);
            feed.insertBefore(div, form)

            storeCommentinLocalStorage(inputValue)

            input.value = '';
        } else {
            input.setCustomValidity("No Special Characters Allowed");
            input.reportValidity()
        }
    }

})

input.addEventListener("input", () => {
    input.setCustomValidity("");
    console.log(input.checkValidity())

});

function storeCommentinLocalStorage(comment) {
    let comments;
    if (localStorage.getItem('comments') === null) {
        comments = [];
    } else {
        comments = JSON.parse(localStorage.getItem('comments'));
    }
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments))

}





hamburger.addEventListener('click', () => {

    if (sideMenu.style.display === 'block') {
        sideMenu.style.display = 'none'

    } else {
        sideMenu.style.display = 'block'
    }
})

closeBtn.addEventListener('click', () => {
    if (sideMenu.style.display === 'block') {
        sideMenu.style.display = 'none'

    } else {
        sideMenu.style.display = 'block'
    }
})


//Highlight active nav

let menus = document.querySelectorAll('.menu')
// console.log(menus)
for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        // console.log(current);
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


