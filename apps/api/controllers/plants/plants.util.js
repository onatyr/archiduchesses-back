"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPlantsWithTasks = formatPlantsWithTasks;
function formatPlantsWithTasks(plantsWithTask) {
    return plantsWithTask.reduce((acc, row) => {
        const plant = acc.find((p) => p.id === row.plants.id);
        if (plant) {
            if (row.tasks) {
                plant.tasks.push({
                    taskId: row.tasks.id,
                    dueDate: row.tasks.dueDate,
                });
            }
        }
        else {
            acc.push(Object.assign(Object.assign({}, row.plants), { tasks: row.tasks
                    ? [
                        {
                            taskId: row.tasks.id,
                            dueDate: row.tasks.dueDate,
                        },
                    ]
                    : [] }));
        }
        return acc;
    }, []);
}
