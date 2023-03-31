let tasksList = JSON.parse(localStorage.getItem('list')) || [];

const DeleteAll = () => {
  const Incomplete = tasksList.filter((task) => task.completed === false);
  tasksList = Incomplete;
  localStorage.setItem('list', JSON.stringify(tasksList));
  window.location.reload();
};

export default DeleteAll;