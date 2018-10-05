  var socket = io();

            var temp_broken = "n/a";
            socket.on('message', function (msg) {
  //              console.log(msg.temp1);
//                console.log(msg.temp2);
console.log(msg.soil_output);
		console.log(msg.temp3);
                if (msg.temp2 != "85") {
                    temp_broken = msg.temp2;
                };
                function precise(x) {
                    return Number.parseFloat(x).toPrecision(4);
                }

                document.getElementById("temp1").innerHTML = precise(msg.temp1);
                document.getElementById("temp2").innerHTML = precise(msg.temp3);
                document.getElementById("soil_status").innerHTML = msg.soil_output;

            });
