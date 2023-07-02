const dataInputFields = [
 {
  id: 1,
  label: 'Nama Lengkap',
  type: 'text',
  name: 'name',
  validation: {
   required: {
    value: true,
    message: 'Nama Lengkap harus diisi',
   },
   pattern: {
    value: /^[a-zA-Z ]+$/,
    message: 'Nama Lengkap hanya boleh berisi huruf',
   },
  },
 },
 {
  id: 2,
  label: 'Email',
  type: 'email',
  name: 'email',
  validation: {
   required: {
    value: true,
    message: 'Email harus diisi',
   },
   pattern: {
    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    message: 'Email tidak valid',
   },
  },
 },
 {
  id: 3,
  label: 'No Handphone',
  type: 'text',
  name: 'phone',
  validation: {
   required: {
    value: true,
    message: 'No Handphone harus diisi',
   },
   pattern: {
    value: /^[0-9]+$/,
    message: 'No Handphone hanya boleh berisi angka',
   },
   minLength: {
    value: 9,
    message: 'No Handphone minimal harus 9 angka',
   },
   maxLength: {
    value: 14,
    message: 'No Handphone maksimal harus 14 angka',
   },
  },
 },
 {
  id: 4,
  label: 'Jurusan',
  type: 'radio',
  name: 'jurusan',
  options: [
   {
    value: 'IT',
    label: 'IT',
   },
   {
    value: 'Non IT',
    label: 'Non IT',
   },
  ],
  validation: {
   required: {
    value: true,
    message: 'Input Jurusan harus diisi',
   },
  },
 },

 {
  id: 5,
  label: 'Kelas Coding yang Dipilih',
  type: 'select',
  name: 'program',
  options: [
   {
    value: '',
    label: 'Pilih Salah Satu Program',
    selected: true,
   },
   {
    value: '1',
    label: 'React',
   },
   {
    value: '2',
    label: 'Vue',
   },
   {
    value: '3',
    label: 'Angular',
   },
  ],
  validation: {
   required: {
    value: true,
    message: 'Program Coding harus dipilih',
   },
  },
 },
 {
  id: 6,
  label: 'Foto Surat Kesungguhan',
  type: 'file',
  name: 'file',
  validation: {
   required: {
    value: true,
    message: 'Surat Kesungguhan harus diisi',
   },
  },
 },
 {
  id: 7,
  label: 'Harapan Untuk Coding Bootcamp Ini',
  type: 'textarea',
  name: 'harapan',
 },
];

export default dataInputFields;
