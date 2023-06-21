$(document).ready(function () {
  $("form").on("submit", function (e) {
    const novaTarefa = $("#taskInput").val();
    e.preventDefault();
    const taskList = $("#taskList");
    const adicionaTarefa = $(`<li>${novaTarefa}</li>`);
    adicionaTarefa.click(function () {
      $(adicionaTarefa).toggleClass("task-done");
    });
    taskList.append(adicionaTarefa)
  });
});