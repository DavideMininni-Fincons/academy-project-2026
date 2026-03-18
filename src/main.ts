export function sayHello(): string {
  return "Hello Academy!";
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `<h1>${sayHello()}</h1>`;
  }
});
