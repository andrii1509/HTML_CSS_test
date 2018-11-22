let els = document.getElementsByClassName('template');
if (els.length % 2 !== 0) {
    els[els.length-1].style.width = '100%';
}