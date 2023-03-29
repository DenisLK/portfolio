document.querySelector('.contentChung-prev').addEventListener('click', function () {


    moveClass('port-item-active', 'previousElementSibling');

    const elem = moveClass('time-line-active', 'previousElementSibling');
    if (elem) {
        elem.querySelector('.time-line-inner').style.width = '';
    }
});


document.querySelector('.contentChung-next').addEventListener('click', next);

function next() {
    const elem = moveClass('time-line-active', 'nextElementSibling');
    moveClass('port-item-active', 'nextElementSibling');
    if (elem) {
        elem.querySelector('.time-line-inner').style.width = '';
    }
}

function moveClass(className, method) {
    const active = document.querySelector('.' + className);
    const next = active[method];

    if (next) {
        active.classList.remove(className);
        next.classList.add(className);
        return active;
    }
    return null;
};
const step = 1;


setInterval(() => {
    const active = document.querySelector('.time-line-active').querySelector('.time-line-inner');
    let w = parseFloat(active.style.width) || 0;
    if (w === 100) {
        next();
        return;
    }
    active.style.width = String(w + step) + '%';

}, 10 * 1000 * step / 100)







document.querySelector('.link_resume').addEventListener('click', function () {
    if(document.querySelector('.hid-link').classList.contains('hid-link-active')){
        document.querySelector('.hid-link').classList.remove('hid-link-active');
    }else{
    document.querySelector('.hid-link').classList.add('hid-link-active');
    }
});