$(function(){
    $(".content").load("more_inf.html"); 
});

function loadPage(page){
    $(".content").load(page);
    $('#navbarNavDropdown').collapse('toggle');
}

function loadNews(page){
    $(".content").load(page);
}