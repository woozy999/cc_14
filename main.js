//cc 14

document.addEventListener('DOMContentLoaded', () => {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');
    const loadingIndicator = document.getElementById('loading-indicator');

//task 2

    async function fetchTickets() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const tickets = await response.json();
            if (tickets.length === 0) {
                throw new Error('No unresolved tickets available');
            }
        } catch (error) {
            handleError(error);
        }
    }
});
