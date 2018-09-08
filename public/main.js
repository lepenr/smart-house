  var socket = io();

            var temp_broken = "n/a";
            socket.on('message', function (msg) {
                console.log(msg.temp1);
                console.log(msg.temp2);
                if (msg.temp2 != "85") {
                    temp_broken = msg.temp2;
                };
                function precise(x) {
                    return Number.parseFloat(x).toPrecision(5);
                }

                document.getElementById("temp1").innerHTML = precise(msg.temp1);
                document.getElementById("temp2").innerHTML = precise(temp_broken);
                document.getElementById("soil_status").innerHTML = msg.soil_output;

            });
