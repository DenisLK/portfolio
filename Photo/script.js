// import { createClient } from 'pexels';
const client = createClient('tFsLuZZLqOk4rbXhkmN0TjLj8tHqsZ3sQp4AbEB6VBwqCX1aL8Biqoc9');

const userID = 'tFsLuZZLqOk4rbXhkmN0TjLj8tHqsZ3sQp4AbEB6VBwqCX1aL8Biqoc9'
const photoEl = document.getElementById('photo');

let state = [];

const runPhoto = async () => {
    const urls = `https://api.pexels.com/v1/?client`;
    const response = await fetch(urls);
    const data = await response.json();
    state = data;
    setPhoto();

};

const render = () =>{
    return state
    .map(({url,author}) => {
        return `<div class="photo-wrap" style="background-image: url(${url})">
        <div class="photo-text">
            <span>Author</span>
            ${author}
        </div>
    </div>`
}).join("");
}
const setPhoto = () => {
    photoEl.innerHTML = render();
};



runPhoto();
console.log(state);