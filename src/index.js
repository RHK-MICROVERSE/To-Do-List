import './index.css';

const jobs = [
  {
    id: 1,
    desc: 'Prepare Breakfast',
    finished: false,
  },
  {
    id: 2,
    desc: 'Drop kids in School',
    finished: false,
  },
  {
    id: 3,
    desc: 'Withdraw money from bank',
    finished: false,
  },
];

const displayjobs = () => {
  jobs.forEach((job) => {
    const li = document.createElement('li');
    li.innerHTML = `<input  type="checkbox" 
                            class="checkbox ${job.finished ? 'finished' : ''}" 
                            id="job-${job.id}" ${job.finished ? 'checked' : ''}>
                    <label for="job-${job.id}">
                      ${job.desc}
                    </label>`;
    const separator = document.createElement('hr');
    li.dataset.id = job.id;
    if (job.completed) {
      li.classList.add('completed');
    }
    document.querySelector('.displayjobs').appendChild(li);
    document.querySelector('.displayjobs').appendChild(separator);
  });
};

window.addEventListener('load', () => {
  displayjobs();
});