const port = 5000;
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hey");
});

app.post("/saveLocalStorageToDatabase", async (req, res) => {
  console.log("Hey data received");
  console.log(req.body.localStore);
  const a = {
    name: "Gajendra",
    age: "21",
  };
  res.send( JSON.stringify(a));
});

app.post("/try", async (req, res) => {
  console.log("data sent from server");
  res.send("hello WOrld");
});

http.listen(process.env.PORT || 5000, () => {
  var host = http.address().address;
  var port = http.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
