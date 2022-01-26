/*
The documentready event handler is called from the index.html file.
No need to add a $(document).ready() event in here.
*/
function documentReady() {

    $('.msgbutton').click(aclick);
    $('.send').click(bclick);



}

function aclick(event) {

    $('.overlay').removeClass('hidden');
    $('.pop-up').removeClass('hidden');
    
    
}

function bclick() {
 
    $('.pop-up').remove();
    $('.overlay').append('<img class="msgsent" src="images/msgsent.png" />')
    window.setTimeout(function(){$('.overlay').addClass('hidden');},2000);
}