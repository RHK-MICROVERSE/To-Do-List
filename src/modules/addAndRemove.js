const tasksList = JSON.parse(localStorage.getItem('list')) || [];
const input = document.querySelector('.user-imput');
const addTask = () => {
  const create = {
    description: input.value,
    completed: false,
    index: tasksList.length + 1,
  };
  if (create.description !== '') {
    tasksList.push(create);
  }
  localStorage.setItem('list', JSON.stringify(tasksList));
};
export default addTask;

const removeTask = (index) => {
  tasksList.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(tasksList));
};
export { removeTask };