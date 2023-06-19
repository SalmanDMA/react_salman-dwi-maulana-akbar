// Problem 1 - Analysis
// Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang di sarankan
// Beraoa banyak kekuranga dalam penulisan kode tersebut ?
// Bagian mana saja terjadi kekurangan tesebut?
// Tuliskan alasan dari tiap kekurangan tersebut!

// class user {
//  var id;
//  var username;
//  var password;
// }

// class userservice {
//  user[] users = [];
//  user[] getallusers() {
//   return this.users;
//  }
//  user getuserbyid(userid){
//   return this.users.filter(userid)
//  }
// }

// Jawaban
// 1 Konvensi Nama Kelas: Nama kelas "user" sebaiknya diubah menjadi "User" dengan huruf pertama kapital untuk mengikuti konvensi penamaan standar, yang menggunakan PascalCase untuk nama kelas.

// 2 Penamaan function yang kurang benar dan tidak enak untuk di baca, seperti contohnya "getallusers()" sebaiknya diubah menjadi "getAllUsers()" dengan huruf pertama kalimat selanjutnya kapital untuk mengikuti konvensi penamaan standar, yang menggunakan camelCase untuk nama function ataupun variabel.

// 3 Deklarasi Variabel: Variabel id, username, dan password dalam kelas user dideklarasikan menggunakan kata kunci var. Dalam JavaScript, disarankan untuk menggunakan let atau const untuk deklarasi variabel guna memastikan pemetaan blok dan mencegah perubahan nilai yang tidak disengaja.

// 4 Tipe Data yang Hilang: Tipe data untuk variabel dalam kelas user tidak ditentukan. Adalah praktik yang baik untuk secara eksplisit menyatakan tipe data untuk meningkatkan keterbacaan kode dan mencegah perilaku yang tidak terduga.

// 5 Modifier Akses Properti Kelas: Sifat visibilitas dari properti users dalam kelas userservice tidak ditentukan. Disarankan untuk menggunakan modifier akses seperti private, public, atau protected untuk mengendalikan aksesibilitas properti kelas.

// 6 Deklarasi Array: Sintaksis deklarasi array user[] users = [] tidak benar. Dalam JavaScript, array dideklarasikan menggunakan tanda kurung siku tanpa menentukan tipe data. Sintaksis yang benar adalah users = [].

// 7 Penggunaan Filter: Pada metode getuserbyid(userid), fungsi filter digunakan dengan cara yang salah. Fungsi filter mengharapkan argumen berupa fungsi callback untuk menentukan kondisi filtrasi. Kode tersebut perlu dimodifikasi agar dapat memfilter array users dengan benar berdasarkan userid.

// 8 Kurangnya Konstruktor: Kelas user dan userservice tidak memiliki konstruktor yang ditentukan. Konstruktor digunakan untuk menginisialisasi properti kelas dan dapat berguna untuk menginisialisasi array users dalam kelas userservice.

// Problem 2 - Rewrite
// Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang di sarankan. Ubahlah penulisan kode berikut menjadilebih terbaca dan rapi!

// class kendaraan {
//  var totalroda = 0;
//  var kecepatanperjam = 0
// }

// class mobil extends kendaraan {
//  void berjalan() {
//   tambahkecepatan(10)
//  }

//  tambahkecepatan(var kecepatanBaru){
//   kecepatanperjam = kecepatanperjam + kecepatanBaru;
//  }
// }

// void main() {
//  mobilcepat = new mobil();
//  mobilcepat.berjalan();
//  mobilcepat.berjalan();
//  mobilcepat.berjalan();

//  mobillamban = new mobil();
//  mobillamban.berjalan();
// }

class Kendaraan {
 constructor() {
  this.totalRoda = 0;
  this.kecepatanPerJam = 0;
 }
}

class Mobil extends Kendaraan {
 berjalan() {
  this.tambahKecepatan(10);
 }

 tambahKecepatan(kecepatanBaru) {
  this.kecepatanPerJam += kecepatanBaru;
 }
}

function main() {
 const mobilCepat = new Mobil();
 mobilCepat.berjalan();
 console.log(`Kecepatan Per-Jam - Mobil Cepat : ${mobilCepat.kecepatanPerJam}`); // Output: 10
 mobilCepat.berjalan();
 console.log(`Kecepatan Per-Jam - Mobil Cepat : ${mobilCepat.kecepatanPerJam}`); // Output: 20
 mobilCepat.berjalan();
 console.log(`Kecepatan Per-Jam - Mobil Cepat : ${mobilCepat.kecepatanPerJam}`); // Output: 30

 const mobilLamban = new Mobil();
 mobilLamban.berjalan();
 console.log(`Kecepatan Per-Jam - Mobil Lamban : ${mobilLamban.kecepatanPerJam}`); // Output: 10
}

main();

// Beberapa perubahan yang dilakukan:

// 1 Nama kelas dimulai dengan huruf kapital sesuai konvensi.
// 2 Variabel dan properti diubah menjadi camelCase untuk meningkatkan keterbacaan.
// 3 Penambahan constructor pada kelas Kendaraan untuk inisialisasi properti.
// 4 Penggunaan += pada metode tambahKecepatan untuk menambahkan kecepatan baru.
// 5 Penambahan kata kunci function sebelum deklarasi fungsi main.
// 6 Penulisan objek mobilCepat dan mobilLamban menggunakan const untuk menghindari perubahan nilai yang tidak diinginkan.
// 7 Pemanggilan fungsi main() di akhir untuk menjalankan program.
// 8 Menambahkan console.log pada fungsi main() untuk mencetak nilai kecepatanPerJam ke dalam console
