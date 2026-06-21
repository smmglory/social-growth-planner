const checkItems = document.querySelectorAll(".check-item");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");

function updateScore() {
  const totalItems = checkItems.length;
  const checkedItems = document.querySelectorAll(".check-item:checked").length;
  const score = Math.round((checkedItems / totalItems) * 100);

  scoreText.textContent = score + "%";

  if (score === 0) {
    messageText.textContent = "Start checking the items above to review your profile readiness.";
  } else if (score < 40) {
    messageText.textContent = "Your foundation needs more work before focusing on growth.";
  } else if (score < 75) {
    messageText.textContent = "Your profile has a basic structure, but several areas still need improvement.";
  } else if (score < 100) {
    messageText.textContent = "Your profile is close to ready. Review the remaining points before scaling visibility.";
  } else {
    messageText.textContent = "Your profile foundation looks ready for a more structured growth plan.";
  }
}

checkItems.forEach((item) => {
  item.addEventListener("change", updateScore);
});
