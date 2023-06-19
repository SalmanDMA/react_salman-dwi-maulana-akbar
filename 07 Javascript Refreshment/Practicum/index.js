// {
// var a = 5;
// let b = 'kampus merdeka';
// const nama = 'Budi';
// let terdaftar = false;
// let lengkap_arr = [a, b, nama, terdaftar];
// jawaban no 1 a
// console.log(lengkap_arr[2]);
// jawaban no 1 b
// terdaftar = true;
// jawaban no 1 c
// perkenalan();
// jawaban no 1 d
// console.log('array = ' + nama);
// a = b;
// console.log('a adalah = ' + a);
// console.log('b adalah = ' + b);
// perkenalan();
// function perkenalan() {
//  let asal = 'Indonesia';
//  return console.log('Perkenalkan nama saya ' + nama + ' nomor urut ' + a + ' sekarang sedang mengikuti ' + b + ' berasal dari ' + asal);
// }
// if (terdaftar === true) {
//  console.log(nama + ' terdaftar sebagai kegiatan kampus merdeka');
// }
// a = b;
// nama = b;
// console.log('asal diakses = ' + asal);
// console.log('a adalah ' + a);
// console.log('b adalah ' + b);
// jawaban no 2 a
// karena nilai dari variabel terdaftar itu false, mangkanya baris kode 21, 22, 23 tidak tampil dan jika ingin tampil nilai dari terdaftar kita ganti menjadi true
// jawaban no 2 b
// karena variabel const itu tidak dapat di ubah nilainya atau tidak dapat di deklarasi ulang
// jawaban no 2 c
// tidak dapat muncul
// karena variabel asal belum di definisikan, walaupun sudah ada di function perkenalan tetapi scope nya berbeda dengan yang ada di baris 28 pada soal atau baris 33 pada code saya
// }

// jawaban no 3
// const foo = ['Budi', 'Sita', 'Ayu'];
// const [a, b, c] = foo;
// console.log(a);
// console.log(b);
// console.log(c);

// jawaban no 4
// let bdays = ['10-17', '05-19', '20-19'];

// let modifiedBdays = bdays.map((date) => {
//  let parts = date.split('-');
//  return parts[0] + '/' + parts[1];
// });

// console.log(modifiedBdays);

// jawaban no 5
// let value = [1, 2, 3, 4, 5, 6];
// let newValue = value.map((val) => {
//  return val * 2;
// });
// console.log(newValue);

// jawaban no 6
// let arr = [1.5, 2.56, 5.1, 12.33];
// let newArr = arr.map((val) => {
//  let rounded = Math.round(val);
//  return rounded;
// });
// console.log(newArr);
