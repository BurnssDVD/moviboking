// script.js

// Data untuk film yang sedang diputar dan akan diputar
const runningMovies = [
    {
      title: "Movie 1",
      poster: "path/to/movie1.jpg"
    },
    {
      title: "Movie 2",
      poster: "path/to/movie2.jpg"
    },
    // Tambahkan data film lainnya di sini
  ];
  
  const upcomingMovies = [
    {
      title: "Upcoming Movie 1",
      poster: "path/to/upcoming1.jpg"
    },
    {
      title: "Upcoming Movie 2",
      poster: "path/to/upcoming2.jpg"
    },
    // Tambahkan data film mendatang lainnya di sini
  ];
  
  // Fungsi untuk menampilkan daftar film
  function displayMovies(movies, container) {
    const movieList = document.querySelector(container);
    movieList.innerHTML = "";
  
    movies.forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;
      movieList.appendChild(movieElement);
    });
  }
  
  // Memanggil fungsi untuk menampilkan daftar film
  displayMovies(runningMovies, ".movie-list:first-child");
  displayMovies(upcomingMovies, ".movie-list:last-child");
  
  // Fungsi untuk menangani form login
  const loginForm = document.querySelector(".login form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Lakukan validasi login di sini
    // Misalnya, dengan memeriksa email dan password di database
    // Jika valid, arahkan pengguna ke halaman utama atau lainnya
  
    console.log("Email:", email);
    console.log("Password:", password);
  });
  
  // Fungsi untuk menangani form registrasi
  const registerForm = document.querySelector(".register form");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Lakukan validasi registrasi di sini
    // Misalnya, pastikan password dan konfirmasi password sama
    if(password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama.");
      return; // Menghentikan eksekusi lebih lanjut jika password tidak sama
    }
    // Simpan data pengguna baru ke dalam database
    // Jika berhasil, arahkan pengguna ke halaman login atau lainnya
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  });