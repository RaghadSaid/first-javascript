let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// تحميل قائمة المهام من localStorage أو تهيئة قائمة فارغة
let tasksList = localStorage.getItem("items") ? localStorage.getItem("items").split(",") : [];

// عند تحميل الصفحة، عرض المهام المحفوظة
tasks.innerHTML = "";
tasksList.forEach((taskText, index) => {
  let task = document.createElement("div");
  task.classList.add("task");

  let del = document.createElement("span");
  del.classList.add("delete");
  del.innerText = "delete";

  del.onclick = () => {
    tasksList.splice(index, 1); // حذف العنصر من القائمة
    localStorage.setItem("items", tasksList.join(",")); // حفظ القائمة
    task.remove(); // إزالة العنصر من DOM
  };

  task.append(taskText, del);
  tasks.append(task);
});

// عند النقر على زر الإضافة
add.onclick = () => {
  let taskText = input.value.trim();
  if (taskText) {
    tasksList.push(taskText); // إضافة المهمة إلى القائمة
    localStorage.setItem("items", tasksList.join(",")); // حفظ القائمة

    let task = document.createElement("div");
    task.classList.add("task");

    let del = document.createElement("span");
    del.classList.add("delete");
    del.innerText = "delete";

    del.onclick = () => {
      let index = tasksList.indexOf(taskText);
      tasksList.splice(index, 1); // حذف العنصر من القائمة
      localStorage.setItem("items", tasksList.join(",")); // حفظ القائمة
      task.remove(); // إزالة العنصر من DOM
    };

    task.append(taskText, del);
    tasks.append(task);
    input.value = ""; // تفريغ حقل الإدخال
  }
};
