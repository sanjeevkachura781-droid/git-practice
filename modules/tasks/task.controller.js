const Task = require("../models/task.model");

function getTasks(req, res) {
    res.json({
        success: true,
        data: Task.getAllTasks()
    });
}

function getTask(req, res) {
    const task = Task.getTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.json({
        success: true,
        data: task
    });
}

function createTask(req, res) {
    const { title } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "A valid task title is required"
        });
    }

    const task = Task.createTask(title.trim());

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: task
    });
}

module.exports = {
    getTasks,
    getTask,
    createTask
};
