const { connect } = require("http2");
const { UP } = require("./constants");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};

const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    connection.write(UP) // A  better way to do it, using a variable declared in constants file. Instead of writing out strings.
  }
  if (data === "a") {
    connection.write("Move: left")
  }
  if (data === "s") {
    connection.write("Move: down")
  }
  if (data === "d") {
    connection.write("Move: right")
  }
  if (data === "n") {
    connection.write("Say: hey guys")
  }
  if (data === "l") {
    connection.write("Say: Whats Up")
  }
  if (data === "r") {
    connection.write("Say: How are you ")
  }


 

};


module.exports =  {
  setupInput
}

