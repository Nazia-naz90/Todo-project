#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
//print welcome message //
console.log((chalk.cyanBright.bold)(`\n \t \t <<<======================================================>>>\n \t \t`));
console.log((chalk.magenta.bold)("\n \t <=======Welcome to code with N90-Todo-list Application=======>\n \t"));
console.log((chalk.cyanBright.bold)(`\n \t \t <<<=======================================================>>>\n\t\t`));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellowBright.bold("Select an option you want to do :"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
//Function to add new task to the list //
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgGreenBright("Enter your new task :"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.bgGreenBright.bold `\n ${newTask.task}Task added successfully in Todo-List`);
};
// Function to view all Todo-List Tasks //
let viewTask = () => {
    console.log(chalk.bgBlueBright.bold("\n Your Todo-List: \n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
// Function to delete a task from the list //
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.bgGreen.bold("Enter the 'index no.' of the task you want to delete :"),
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.bgBlueBright.bold(`\n ${deletedTask} This task has been deleted successfully from Todo-List`));
};
// Function to Update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no'of the task you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list check  option "view Todo-List"]`);
};
main();
