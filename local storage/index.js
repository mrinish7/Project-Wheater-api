const todos = [
    { task: "HTML", author: "mtinx"},
    {task: "CSS", author: "mrinx"},
    {task: "javascript", author:"mrinx"}
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));