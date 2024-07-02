"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // Create container
  const div = document.createElement("div");
  div.classList.add("container");

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a task";
  input.classList.add("input");

  // Create task list
  const ul = document.createElement("ul");
  ul.classList.add("list");

  // Create add button
  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("button");
  button.textContent = "Add";

  // Add task function
  function addTask() {
    if (input.value.trim() === "") {
      return; // Prevent adding empty tasks
    }

    const li = document.createElement("li");

    // Create radio button
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";
    radio.value = "radio";
    radio.classList.add("radio");

    // Task text
    const taskText = document.createElement("span");

    const MAX_LENGTH = 50; // Maximum text length
    let taskValue = input.value;
    if (taskValue.length > MAX_LENGTH) {
      taskText.title = taskValue; // Add full text as tooltip
      taskValue = taskValue.substring(0, MAX_LENGTH) + "...";
    }
    taskText.textContent = taskValue;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(radio);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
  }

  // Add click event listener to button
  button.addEventListener("click", addTask);

  // Add enter key listener to input field
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Append elements to container
  div.appendChild(input);
  div.appendChild(button);
  div.appendChild(ul);

  // Append container to body
  document.body.appendChild(div);
});
