# Class: `Modal`

## Deskripsi
Kelas `Modal` digunakan untuk membuat dan mengelola elemen modal di halaman web dengan berbagai opsi penyesuaian seperti konten, aksi, dan lain-lain.

## Konstruktor
```typescript
constructor(private _modalName: string)
```
- **\_modalName (String)**: Nama dari modal.



## Properti
### Private
- _modalButton (HTMLButtonElement): Tombol yang memicu pembukaan modal.
- _ionModal (Any): Elemen modal dari Ionic.
- _modalName (String): Nama dari modal.

### Metode

`create(content: string): this`

Membuat elemen modal dan menambahkannya ke dalam halaman.

- **content (String)**: Konten yang akan ditampilkan dalam modal.
- **Returns**: Instance dari kelas `Modal`.

`listen(listener: Function): this`

Menambahkan listener untuk event willDismiss dan willPresent pada modal.

- **listener (Function)**: Fungsi yang akan dipanggil saat event terjadi.
- **Returns**: Instance dari kelas `Modal`.

`backdropDismis(value: boolean = false): this`

Menentukan apakah modal dapat ditutup dengan klik pada backdrop.

- **value (Boolean, opsional)**: Nilai untuk menentukan apakah backdrop dapat menutup modal, default false.
- **Returns**: Instance dari kelas `Modal`.

`confirm(title: string, text: string, actions?: HTMLElement[]): this`

Membuat modal konfirmasi dengan judul, teks, dan aksi yang diberikan.

- **title (String)**: Judul modal.
- **text (String)**: Teks dalam modal.
- **actions (HTMLElement[], opsional)**: Aksi yang akan ditampilkan dalam modal.
- **Returns**: Instance dari kelas `Modal`.

`alert(message: string, title?: string): void`

Membuat modal peringatan dengan pesan dan judul yang diberikan.

- **message (String)**: Pesan dalam modal.
- **title (String, opsional)**: Judul modal, default Peringatan.
- **Returns**: Instance dari kelas `Modal`.

`open(): this`

Membuka modal dengan memicu tombol modal.

- **Returns**: Instance dari kelas `Modal`.

`iosMode(value?: boolean): this`

Untuk tampilan seperti iOs.

- **value (boolean, opsional)**: Nilai antara `true` atau `false`.
- **Returns**: Instance dari kelas `Modal`.

`close(meta?: any, role?: string): this`

Menutup modal dengan meta dan role yang diberikan.

- **meta (Any, opsional)**: Meta data yang akan dikirim saat modal ditutup.
- **role (String, opsional)**: Peran dari penutupan modal.
- **Returns**: Instance dari kelas `Modal`.

```js
const myModal = new Modal('example-modal');

myModal.create('<p>Hello, this is a modal!</p>').open();

myModal.listen((event) => {
  console.log('Modal event:', event.name, 'with detail:', event.detail);
});

myModal.backdropDismis(true);

myModal.confirm('Confirm Title', 'Are you sure you want to proceed?', [
  ionButton({ text: 'No', fill: 'clear', onClick: () => myModal.close(false, 'confirmNo') }),
  ionButton({ text: 'Yes', onClick: () => myModal.close(true, 'confirmYes') })
]);

myModal.alert('This is an alert message');
```

Dengan dokumentasi ini, pengguna dapat memahami cara menggunakan kelas Modal dan metode-metode yang tersedia untuk menyesuaikan dan mengelola tampilan modal sesuai kebutuhan.
