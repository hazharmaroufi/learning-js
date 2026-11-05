const questions = document.querySelectorAll(".question");
const items = document.querySelectorAll(".item");

questions.forEach((question) =>
  question.addEventListener("click", function () {
    const item = question.closest(".item");
    const wasOpen = item.classList.contains("open");
    items.forEach((other) => other.classList.remove("open"));
    if (!wasOpen) {
      item.classList.add("open")
    }
  })
)


