const seatRows = document.querySelector('.seat-rows');
const seatsCount = document.querySelector('.count');
const totalPrice = document.querySelector('.total');
const bookBtn = document.querySelector('.book-btn');
const filterSelect = document.getElementById('filter-seats');
const previewContainer = document.querySelector('.preview-container');

const seats = []; // Array untuk menyimpan kursi yang dipilih
const occupiedSeats = [5, 10, 15, 20]; // Array untuk menyimpan kursi yang sudah terisi (contoh)

// Fungsi untuk membuat daftar kursi
function createSeats() {
  const rows = 10; // Jumlah baris kursi
  const seatsPerRow = 10; // Jumlah kursi per baris

  for (let row = 0; row < rows; row++) {
    const rowElement = document.createElement('li');
    rowElement.classList.add('row');

    for (let seat = 0; seat < seatsPerRow; seat++) {
      const seatElement = document.createElement('div');
      const seatNumber = row * seatsPerRow + seat;

      if (occupiedSeats.includes(seatNumber)) {
        seatElement.classList.add('seat', 'occupied');
      } else {
        seatElement.classList.add('seat', 'available');
      }

      seatElement.dataset.row = row;
      seatElement.dataset.seat = seat;
      seatElement.addEventListener('click', selectSeat);
      rowElement.appendChild(seatElement);
    }

    seatRows.appendChild(rowElement);
  }
}

// Fungsi untuk memilih kursi
function selectSeat(e) {
  const seat = e.target;
  const row = parseInt(seat.dataset.row, 10);
  const seatNumber = parseInt(seat.dataset.seat, 10);

  if (seat.classList.contains('available')) {
    seat.classList.remove('available');
    seat.classList.add('selected');
    seats.push({ row, seatNumber });
  } else if (seat.classList.contains('selected')) {
    seat.classList.remove('selected');
    seat.classList.add('available');
    seats.splice(seats.indexOf(seats.find(s => s.row === row && s.seatNumber === seatNumber)), 1);
  }

  updateSeatCount();
}

// Fungsi untuk memperbarui jumlah kursi yang dipilih dan total harga
function updateSeatCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  seatsCount.innerText = selectedSeatsCount;
  // Misalkan harga per kursi adalah 10000
  const pricePerSeat = 10000;
  totalPrice.innerText = selectedSeatsCount * pricePerSeat;
}

// Pastikan fungsi createSeats dipanggil ketika halaman dimuat
document.addEventListener('DOMContentLoaded', createSeats);