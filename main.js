//cc 14

//setup

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
            displayTickets(tickets);
        } catch (error) {
            handleError(error);
        }
    }

//task 3

    function displayTickets(tickets) {
        ticketContainer.innerHTML = '';
        tickets.forEach(ticket => {
            const ticketDiv = document.createElement('div');
            ticketDiv.classList.add('ticket');

            const ticketId = document.createElement('p');
            ticketId.textContent = `Ticket ID: ${ticket.id}`;

            const customerName = document.createElement('p');
            customerName.textContent = `Customer Name: User ${ticket.userId}`;

            const issueDescription = document.createElement('h3');
            issueDescription.textContent = `Issue: ${ticket.title}`;

            const ticketDetails = document.createElement('p');
            ticketDetails.textContent = `Details: ${ticket.body}`;

            ticketDiv.appendChild(ticketId);
            ticketDiv.appendChild(customerName);
            ticketDiv.appendChild(issueDescription);
            ticketDiv.appendChild(ticketDetails);

            ticketContainer.appendChild(ticketDiv);
        });
    }

    function handleError(error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }

    fetchTickets();
});
