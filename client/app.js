var app = {



  init : function(){
    $( "#target" ).on("submit", function(event){
      event.preventDefault();
      app.postUsername();
    });

    // app.getTweets();
    // app.postTweets();
  },

  postUsername : function(){
    var newUsername = $("#username").val();

    console.log("Username is ", newUsername);
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/',
        data: JSON.stringify({username: newUsername}),
        contentType: "application/json",
        success: function(data) {
            // JSON.parse
            console.log('success');
            // console.log("this is data", data);
            app.displayTweets(data);
        },
        error: function(){
          console.log("error")
        }
      })


  },

  getTweets : function(){
    console.log("getTweets ran");
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/',
        success: function(data) {
            console.log('success');
            console.log(data);
            app.displayTweets(data);
        },
        error: function(){
          console.log("error")
        }
      })



  },

  displayTweets: function(data){
    console.log("Here",JSON.parse(data));
    var parsedData = JSON.parse(data);
    for(var i = 0; i < parsedData.length; i++){
      $("#tweets").append("<p>" + " : " + parsedData[i].text +"</p>");
  }





}
}