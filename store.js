export function getLocalStorageData() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function setLocalStorageData(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
