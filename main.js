let submitBtn = document.querySelector('button');
let feed = document.querySelector('.feed');
let form = document.querySelector('form')
let input = document.querySelector('input')


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
        comments = (localStorage.getItem('comments'));
    }

    JSON.parse(comments).map((comment) => {
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
        let text = e.target;
        console.log(text);
        let inputValue = input.value;
        console.log(inputValue);
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
    }

})

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