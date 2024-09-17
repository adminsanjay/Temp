document.addEventListener('DOMContentLoaded', () => {
    const totalRooms = 100;
    let availableRooms = totalRooms;

    const roomList = document.getElementById('room-list');
    const availableCount = document.getElementById('available-count');
    const bookingForm = document.getElementById('booking-form');
    const roomNumberInput = document.getElementById('room-number');

    function createRoomElement(roomNumber) {
        const roomDiv = document.createElement('div');
        roomDiv.className = 'room';
        
        const roomText = document.createElement('span');
        roomText.textContent = `Room ${roomNumber}`;
        
        const bookButton = document.createElement('button');
        bookButton.className = 'book-button';
        bookButton.textContent = 'Book Now';
        
        bookButton.addEventListener('click', () => {
            if (availableRooms > 0) {
                availableRooms--;
                availableCount.textContent = availableRooms;
                bookButton.disabled = true;
                bookButton.textContent = 'Booked';
            }
        });

        roomDiv.appendChild(roomText);
        roomDiv.appendChild(bookButton);
        return roomDiv;
    }

    function renderRooms() {
        roomList.innerHTML = ''; // Clear existing rooms
        for (let i = 1; i <= totalRooms; i++) {
            const roomElement = createRoomElement(i);
            roomList.appendChild(roomElement);
        }
    }

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally
        const roomsToBook = parseInt(roomNumberInput.value, 10);

        if (roomsToBook > availableRooms) {
            alert('Not enough rooms available!');
            return;
        }

        let booked = 0;
        for (const button of document.querySelectorAll('.book-button')) {
            if (booked >= roomsToBook) break;
            if (!button.disabled) {
                button.disabled = true;
                button.textContent = 'Booked';
                booked++;
            }
        }

        availableRooms -= roomsToBook;
        availableCount.textContent = availableRooms;
    });

    renderRooms();
});
