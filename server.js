const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Watching");
});

require('./src/api/routes/job.routes')(app)

app.listen(process.env.PORT || port, () => {
	console.log(`listening to port ${port}`);
});
