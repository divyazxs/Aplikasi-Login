/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */ 
/** 
* Membuat variabel loginFormElement untuk tampilan form. 
* @contant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/** 
* Membuat variabel inputEMailELement untuk tampilan input email. 
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordELement untuk tampilan input password. 
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail utnuk menyimpan informasi email sementara. 
* @constant {string}
*/ 
const expectedEmail = 'admin@dicoding.com';


/** 
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara. 
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button diklik. 
  * @constant {string}
  */
  const email = inputEmailElement.value;


  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program berpindah ke home. */
    goToHome();
  } else {

    /* Comment : Jika tidak sesuai, maka akan menampilkan informasi bahwa input tidak sesuai. */
    showPopUp();
  }
});
