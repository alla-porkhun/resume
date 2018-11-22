$(function(){
    let content = '';

    let bank = $.getJSON( "json/bank_of_knowledge.json", function() {

        let data = bank.responseJSON.news;

        for(let i = 0; i < data.length; i++) {
            content += `<p class="post f-w-600"><a href="${data[i].link}" target="_blank">${data[i].title}</a></p>`;
        }

        $(".content-news").html(content);
    });
});