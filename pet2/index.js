



document.querySelector('.contentChung-prev').addEventListener('click', function () {
    function moveClass(className, activeClassName){
        let active = document.querySelector('.' + activeClassName);
        let prev = active.previousElementSibling;
   if(prev && prev.classList.contains(className)){
    active.classList.remove(activeClassName);
    active.previousElementSibling.classList.add(activeClassName);
}}
moveClass('time-line', 'time-line-active');
moveClass('content-chung', 'content-chung-active');
});


document.querySelector('.contentChung-next').addEventListener('click', function () {
    function moveClass(className){
        let active = document.querySelector('.' + className);
   if(active.nextElementSibling){
    active.classList.remove(className);
    active.nextElementSibling.classList.add(className);
}}
moveClass('time-line-active');
moveClass('content-chung-active');
});


