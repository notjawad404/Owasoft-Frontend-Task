const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5020"],
  })
);

app.use(express.json())


const pusher = new Pusher({
    appId: "1825691",
    key: "c9829c35412b4b4d9f1f",
    secret: "1375f6625121eb3b81da",
    cluster: "ap1",
    useTLS: true
  });
  



  app.post('/api/messages', async(req, res) => {
    await pusher.trigger("angularChatapp", "message", {
        sender: req.body.sender,
        reciever: req.body.reciever,
        message: req.body.message,
      });

      res.json([]);
  })





console.log("Listening at port 5020")
app.listen(5020)