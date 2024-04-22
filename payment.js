const seatCount = document.querySelector('.seat-count');
const totalPrice = document.querySelector('.total-price');
const payBtn = document.querySelector('.pay-btn');

// Mengambil data kursi dan total harga dari halaman sebelumnya (seatbook.html)
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
const total = parseFloat(localStorage.getItem('total'));

// Menampilkan data kursi dan total harga pada halaman pembayaran
seatCount.textContent = selectedSeats.length;
totalPrice.textContent = `$${total.toFixed(2)}`;

// Event listener untuk tombol "Pay Now"
payBtn.addEventListener('click', () => {
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

  if (paymentMethod) {
    // Lakukan proses pembayaran dengan metode yang dipilih
    const selectedMethod = paymentMethod.value;
    console.log('Metode pembayaran:', selectedMethod);

    // Lakukan tindakan lanjutan setelah pembayaran berhasil
    // Misalnya, menampilkan konfirmasi pembayaran atau mengarahkan ke halaman lain
    alert('Pembayaran berhasil!');
  } else {
    alert('Silakan pilih metode pembayaran terlebih dahulu.');
  }
});