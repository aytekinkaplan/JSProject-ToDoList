"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // Container oluşturuluyor
  const div = document.createElement("div");
  div.classList.add("container");

  // Input alanı oluşturuluyor
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a task";
  input.classList.add("input");

  // Görev listesi oluşturuluyor
  const ul = document.createElement("ul");
  ul.classList.add("list");

  // Ekleme butonu oluşturuluyor
  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("button");
  button.textContent = "Add";

  // Görev ekleme fonksiyonu
  function addTask() {
    if (input.value.trim() === "") {
      return; // Boş değer eklenmesini engeller
    }

    const li = document.createElement("li");

    // Radyo butonu oluşturuluyor
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";
    radio.value = "radio";
    radio.classList.add("radio");

    // Görev metni
    const taskText = document.createElement("span");

    const MAX_LENGTH = 50; // Maksimum metin uzunluğu
    let taskValue = input.value;
    if (taskValue.length > MAX_LENGTH) {
      taskText.title = taskValue; // Tooltip olarak tam metni ekleyin
      taskValue = taskValue.substring(0, MAX_LENGTH) + "...";
    }
    taskText.textContent = taskValue;

    // Delete butonu oluşturuluyor
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

  // Butona tıklama olayını dinleyici
  button.addEventListener("click", addTask);

  // Enter tuşuna basıldığında görev eklemek için
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Elemanlar container içine ekleniyor
  div.appendChild(input);
  div.appendChild(button);
  div.appendChild(ul);

  // Container body içine ekleniyor
  document.body.appendChild(div);
});
