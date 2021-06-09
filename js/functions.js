const nav = document.getElementById('nav');
const nav_children = nav.children;
const logo = document.getElementById('simple-logo');

window.addEventListener("scroll", function(event){
    var pageNr = Math.floor(this.scrollY / (this.screen.availHeight * 0.8));
    if (this.scrollY != 0) {
        nav.style.backgroundColor = "white";
        nav.style.boxShadow = "0px 3px 20px 0px #00000066";
        logo.style.height = "7.5vh";
    } else {
        nav.style.backgroundColor = "";
        nav.style.boxShadow = "";
        logo.style.height = "15vh";
    }
    for (var i = 0; i < nav_children.length; i++){
        nav_children[i].style.borderBottom = "2px solid white";
    }
    if (nav_children.length - 1 >= pageNr){
        nav_children[pageNr].style.borderBottom = "2px solid var(--yellow)";
    }
});

function toggleExpanded(checkboxId, expandedId){
    var checkbox = document.getElementById(checkboxId);
    var expanded = document.getElementById(expandedId);
    var label = checkbox.parentElement.children;
    
    for (var i = 0; i < label.length; i++){
        if (label[i].classList.contains('toggle-label')){
            label = label[i];
            break;
        }
    }

    if (checkbox.checked){
        expanded.classList.add('expanded');
        label.classList.add('rotate');
    } else {
        expanded.classList.remove('expanded');
        label.classList.remove('rotate');
    }
}