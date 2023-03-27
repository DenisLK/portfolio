function initPlayer(params) {
    const target = params.target;
    if (target == null || params.slides === undefined) {
        return;
    }
    let timeLine = '';
    let contentChung = '';
    let isFirst = true;
    for (const elem of params.slides) {
        timeLine += `
    <div class="time-line ${isFirst ? 'time-line-active' : ''}">
        <div class="time-line-inner"></div>
    </div>`;
        contentChung += `
    <div class="content-chung ${isFirst ? 'content-chung-active' : ''}">
         <img src="${elem.url}" alt="${elem.alt || ''}">
    </div>`
        isFirst = false;
    }
    target.innerHTML = `
    <div class="player">
        <div class="scroll_line ${timeLine}"></div>

        <div class="content-wrapper">
        <div class="content-switcher contentChung-prev"></div>
        <div class="content-switcher contentChung-next"></div>
        <div class="content">${contentChung}</div>
            
        </div>
    
    </div>`;




   
}


let nextElem = document.querySelector('.contentChung-prev');
nextElem.addEventListener('click', function () {
    moveClass('content-chung-active', 'previousElementSibling');
    moveClass('time-line-active', 'previousElementSibling', (elem) => {
        const inner = elem.querySelector('.time-line-inner')
        const w = parseFloat(inner.style.width) || 0;
        elem.querySelector('.time-line-inner').style.width = '';
        return w <= 10;
    });

});


document.querySelector('.contentChung-next').addEventListener('click', next);


function moveClass(className, method, pred) {
    const active = target.querySelector('.' + className);
    let next = active[method];
    if (pred && !pred(active)) {
        return null;
    }
    if (next) {
        active.classList.remove(className);
        next.classList.add(className);
        return active;
    }
    return null;
}

function next() {

    moveClass('content-chung-active', 'nextElementSibling');
    const elem = moveClass('time-line-active', 'nextElementSibling');
    if (elem) {
        elem.querySelector('.time-line-inner').style.width = '';
    }
};

let timer;
function runInterval(time, step) {
    clearInterval(timer);
    timer = setInterval(() => {
        const active = target.querySelector('.time-line-active').querySelector('.time-line-inner');
        let w = parseFloat(active.style.width) || 0;
        if (w === 100) {
            next()
            return;
        }
        active.style.width = String(w + step) + '%'

    }, time * 1000 * step / 100);
}
runInterval((params.time) || 1, (params.step) || 1)


















