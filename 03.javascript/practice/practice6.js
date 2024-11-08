const todos = document.querySelectorAll('.todo');
const dones = document.querySelectorAll('.done');

for (let i of todos) {
  i.className = 'done';
}
for (let i of dones) {
  i.className = 'todo';
}
