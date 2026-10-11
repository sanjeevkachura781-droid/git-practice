const tasks = [
    {
        id: 1,
        title: "Learn Git and GitHub",
        completed: false
    },
    {
        id: 2,
        title: "Learn Node.js",
        completed: false
    }
];

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === Number(id));
}

function createTask(title) {
    const task = {
        id: tasks.length
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title,
        completed: false
    };

    tasks.push(task);
    return task;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask
};
