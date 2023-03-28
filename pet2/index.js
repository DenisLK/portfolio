document.querySelector('.contentChung-prev').addEventListener('click', function(){
   
    const elem = moveClass('time-line-active', 'previousElementSibling');
    moveClass('content-chung-active', 'previousElementSibling');
    if(elem){
        elem.querySelector('.time-line-inner').style.width = '';
    }
});


document.querySelector('.contentChung-next').addEventListener('click', next);

function next(){
   const elem =  moveClass('time-line-active', 'nextElementSibling');
    moveClass('content-chung-active', 'nextElementSibling');
    if(elem){
        elem.querySelector('.time-line-inner').style.width = '';
    }
}

function moveClass(className, method){
    const active = document.querySelector('.' + className);
    const next = active[method];

    if(next){
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
    if(w === 100){
      next();        
        return;
    }
    active.style.width = String(w + step) + '%';
    
},2*1000*step/100)


















