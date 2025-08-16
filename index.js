import { getLocalStorageData, setLocalStorageData } from "./store.js";

const inputName = document.getElementById("name");
const inputDescription = document.getElementById("description");
const form = document.querySelector("form");
const button = document.querySelector("#submitButton");
const ul = document.querySelector("ul");

let tasks = getLocalStorageData();
getLocalStorageData();

// 1. წამოვიღოთ და წავიკითხოთ ინფუთები
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = inputName.value;
  const descriptionValue = inputDescription.value;
  const newTask = {
    name: nameValue,
    description: descriptionValue,
    id: Date.now(),
  };

  // 2. შევინახოთ წამოღებული ინფორმაცია Array-ში
  tasks.push(newTask);
  setLocalStorageData(tasks);
  renderTasks();
});

renderTasks();

// 3. დავარენდეროთ(გამოვაჩინოთ ეკრანზე)
function renderTasks() {
  ul.innerHTML = tasks
    ?.map((task) => {
      return `
<li class="list-item">
    <h4>${task.name}</h4>
    <p>${task.description}</p>
    <button class="mt" onclick="deleteTask(${task.id})" >delete task</button>
</li>`;
    })
    .join("");
}

window.deleteTask = function (selectedTaskId) {
  tasks = tasks.filter((task) => task.id !== selectedTaskId);

  setLocalStorageData(tasks);

  renderTasks();

  console.log("tasks", tasks);
};
