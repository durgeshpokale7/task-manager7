const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://durgeshpokale7_db_user:OmL2VXsTGxX1SfGW@cluster0.1akmoms.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
