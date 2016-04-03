var app = {



  init : function(){
    $( "#target" ).on("submit", app.postUsername);

    app.getTweets();
    // app.postTweets();
  },

  postUsername : function(){
    var newUsername = $("#username").val();

    console.log("Username is ", newUsername);
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/',
        data: newUsername,
        contentType: "text/plain",
        success: function(data) {

            console.log('success');
            console.log("this is data", data);
            // displayTweets();
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

    for(var i = 0; i < data.length; i++){
      $("#tweets").append("<p>" + " : " + data[i] +"</p>");
  }





}
}