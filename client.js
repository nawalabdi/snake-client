const { get } = require("http");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
   host: IP,
   port: PORT

  });
  conn.on("data", (data) => {
    console.log(data)
    // code that does something
  });
  conn.on("connect", () => {
    console.log("Connection successfully established")
    conn.write("Name: NAA");
    // adding messages to the server
    // conn.write("Move: up" ); << hardcoded move up message to the server 
  
   
    // code that does something
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");


module.exports = {
  connect
}