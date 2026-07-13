const MIN = 1;
const MAX = 100;

document.getElementById("play-btn").addEventListener("click", () => {
  const winningNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  let attempts = 0;
  let guessed = false;

  /**
   * Exercise notes
   *
   * Complete the exercise.
   *  - Game loop using prompt and alert;
   *  - Ask the user for input
   *    - If the user clicks "Cancel", stop the game
   *    - Otherwise, convert the input string into a real number, then
   * - Conditional checks on the inserted number vs the generated one.
   */
});