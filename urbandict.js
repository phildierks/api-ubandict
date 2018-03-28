$(document).ready(function(){
    $("#search").on("click",function(){
        var word = $("#word").val();
        console.log(word);
        $.ajax({
            url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + word,
            type: 'GET',
            beforeSend: function(x){
                x.setRequestHeader("Key","7o2Tq56eB5msh56m7aGnAh9guV6Op1eZ35sjsnDElbSq3n5iqI");
            },
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                alert('Failed!');
            }
        });
    });
});
function myFunction(result){

}
