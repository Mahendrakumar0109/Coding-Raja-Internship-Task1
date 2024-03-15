// Sample job data (replace with your actual data)
const jobs = [
    { title: 'Software Engineer', location: 'California' },
    { title: 'Data Analyst', location: 'Texas' },
    // Add more job objects...
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(query) || job.location.toLowerCase().includes(query)
    );

    displayResults(filteredJobs);
}

function displayResults(jobs) {
    resultsList.innerHTML = ''; // Clear existing results

    jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.title} - ${job.location}`;
        resultsList.appendChild(li);
    });
}

