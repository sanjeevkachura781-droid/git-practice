const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const taskRoutes = require("./modules/tasks/routes/task.routes");

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Task Management API"
    });
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
