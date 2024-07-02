function fetchDataAndUpdate() {
    fetch('/api/impeachment-data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            document.getElementById('agreeCount').textContent = data.totalCount
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('agreeCount').textContent = 'Error loading data'
        })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndUpdate()
    setInterval(fetchDataAndUpdate, 2000)
})