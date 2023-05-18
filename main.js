// Azer's web project

// Counting Variables
let numCorrect = 0;
// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let question1 = +document.getElementById("question-in").value.toLowerCase();
  let question2 = document.getElementById("question-in2").value.toLowerCase();
  let question3 = document.getElementById("question-in3").value.toLowerCase();
  let question4 = document.getElementById("question-in4").value.toLowerCase();
  // let res1 = 0;
  // let res2 = 0;
  // let res3 = 0;
  // let res4 = 0;
  // If statements
  if (question1 === 2011) {
    document.getElementById("feedback1").innerHTML = "Correct!";
    numCorrect++;
  } else {
    document.getElementById("feedback1").innerHTML =
      "Minecraft's was fully released in 2011";
  }

  if (question2 === "creepers") {
    document.getElementById("feedback2").innerHTML = "Correct!";
    numCorrect++;
  } else {
    document.getElementById("feedback2").innerHTML =
      "Creepers run away from Ocelots when they are near them";
  }

  if (question3 === "cave game") {
    document.getElementById("feedback3").innerHTML = "Correct!";
    numCorrect++;
  } else {
    document.getElementById("feedback3").innerHTML =
      "Before it was called Minecraft the creators named it Cave Game";
  }

  if (question4 === "ender dragon egg" || question4 === "exp points") {
    document.getElementById("feedback4").innerHTML = "Correct!";
    numCorrect++;
  } else {
    document.getElementById("feedback4").innerHTML =
      "The Ender Dragon once killed drops an egg and exp points";
  }
  // Feedback code
  final = (numCorrect / 4) * 100;
  fraction = numCorrect;
  if (final > 99) {
    let msg = `You scored a ${final}% aka ${fraction}/4 making you a Minecraft SENSATION!`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 70) {
    let msg = `Great Job you scored a ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 50) {
    let msg = `You scored a ${final}% aka ${fraction}/4, that means you have some knowledge in this field`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 25) {
    let msg = `Welp, at least you got one right, meaning you got ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else {
    let msg = `Wow, you know nothing about Mincecraft, you got a ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  }
}
