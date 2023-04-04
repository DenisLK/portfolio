// import { createClient } from 'pexels';
// const client = createClient('tFsLuZZLqOk4rbXhkmN0TjLj8tHqsZ3sQp4AbEB6VBwqCX1aL8Biqoc9');

// const userID = 'tFsLuZZLqOk4rbXhkmN0TjLj8tHqsZ3sQp4AbEB6VBwqCX1aL8Biqoc9'
const photoEl = document.getElementById('photo');

let state = [];

const runPhoto = async () => {
    const urls = `https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id`;
    const response = await fetch(urls);
    const data = await response.json();
    state = data.data;
    setPhoto();
console.log(state);
};

const render = () =>{
    return state
    .map(({image_id,title}) => {
        return `<div class="photo-wrap" style="background-image: url(https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg)" style="width=200px">
        <div class="photo-text">
            <span>Author</span>
            ${title}
        </div>
    </div>`
}).join("");
//     return state.data(({image_id}) => {
//         return `<div class="photo-wrap" style="background-image: url(https://www.artic.edu/iiif/2${image_id}/full/843,/0/default.jpg)">
//         <div class="photo-text">
//             <span>Author</span>
            
//         </div>
//     </div>`
// }).join("");
    
}
const setPhoto = () => {
    photoEl.innerHTML = render();
};



runPhoto();
