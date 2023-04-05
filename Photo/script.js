const photoEl = document.getElementById('photo');

let state = [];

const runPhoto = async () => {
    const urls = `https://api.artic.edu/api/v1/artworks?ids=27992,28560,109620,94100,93759,102739,96973,145301&fields=id,title,image_id`;
    const response = await fetch(urls);
    const data = await response.json();
    state = data.data;
    setPhoto();
};

const render = () => {
    return state
        .map(({ image_id, title }) => {
            return `<div class="photo-wrap photo-none">
        <div class="photo-text">
            <span>${title}</span>            
        </div>
        <img src="https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg" alt="${title}" class="prview">
        <i class="fa-solid delete fa-circle-xmark"></i>
        <i class="fa-regular like fa-heart"></i>
    </div>`
        }).join("");
}
const setPhoto = () => {
    photoEl.innerHTML = render();
};
runPhoto();


document.addEventListener('click', e => {
    if (!e.target.classList.contains("delete")) {
        return;
    } e.target.parentNode.parentNode.removeChild(e.target.parentNode);
});
document.addEventListener('click', e => {
    if (e.target.classList.contains('fa-regular')) {
        e.target.classList.add('fa-solid');
        e.target.classList.remove('fa-regular');
        e.target.parentNode.classList.remove('photo-none');
    } else {
        if (e.target.classList.contains('fa-solid')) {
            e.target.classList.add('fa-regular');
            e.target.classList.remove('fa-solid');
            e.target.parentNode.classList.add('photo-none');
        }
    }
});
const filterEl = document.getElementById('filter');

filterEl.onclick = function () {

    const noLikeEl = document.querySelectorAll('.photo-none');
    noLikeEl.forEach(function (item) {
        if (!item.classList.contains('none')){
            item.classList.add('none');
        }else{
            item.classList.remove('none')
        }
});

}

