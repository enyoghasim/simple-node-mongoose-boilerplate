const express = require("express");
const cors = require("cors");
const app = express();
const { Mongoose } = require("./src/controllers/mongoose.controller");

/* cors and express middleware */
app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//   })
// );

app.use(
  "/",
  cors({
    origin: "*",
  }),
  require("./src/routes/")
);

app.get("*", (_, res) => {
  return res.status(404).sendFile("src/views/404.html", { root: __dirname });
});
app.post("*", (_, res) => {
  return res.status(404).sendFile("src/views/404.html", { root: __dirname });
});
app.put("*", (_, res) => {
  return res.status(404).sendFile("src/views/404.html", { root: __dirname });
});
app.delete("*", (_, res) => {
  return res.status(404).sendFile("src/views/404.html", { root: __dirname });
});

const db = new Mongoose();

db.connect()
  .then((e) => {
    console.log(e);
    app.listen(process.env.PORT || 7090, () => {
      console.log(`Server is running on port ${process.env.PORT || 7090}`);
    });
  })
  .catch((err) => {
    console.log(err + ": " + "Error connecting to MongoDB");
  });
