$(function(){
    $(".content").load("more_inf.html"); 
});

function loadPage(page){
    $(".content").load(page);
    document.getElementById('navbar-toggler').classList.add('collapsed');
    document.getElementById('navbarNavDropdown').classList.add('collapsed');
}
