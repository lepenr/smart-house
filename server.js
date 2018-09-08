var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var sensor = require("ds18b20");
var gpio = require("gpio");

app.get("/", function(req, res) {
  //send the index.html file for all requests
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

http.listen(3001, function() {
  console.log("listening on *:3001");
});

//soil check
var gpio21 = gpio.export(21, {
  direction: "in",
  ready: function() {}
});
//


//for testing, we're just going to send data to the client every second
setInterval(function() {
  //Set up yours device ID ..
//ID of first temp sensor
  var temp1;
  temp1 = sensor.temperatureSync("28-031722c313ff", { parser: "hex" });
//ID of second temp sensor
  var temp2 = sensor.temperatureSync("28-031722cedeff", { parser: "hex" });
var soil_status = gpio21.value;


  console.log(temp1);
  console.log(temp2);
  console.log(gpio21.value);

  var soil_output;
  if (soil_status == 1) {
    soil_output = "Dry";
  } else {
    soil_output = "Wet";
  }

  console.log(soil_output);
  io.emit("message", { temp1, temp2, soil_output });
}, 1000);
