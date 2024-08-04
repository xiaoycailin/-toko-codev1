# Toast

Toast adalah notifikasi halus yang biasa digunakan dalam aplikasi modern. Ini dapat digunakan untuk memberikan umpan balik tentang suatu operasi atau untuk menampilkan pesan sistem. Toast muncul di atas konten aplikasi, dan dapat ditutup oleh aplikasi untuk melanjutkan interaksi pengguna dengan aplikasi.


`Semua method dapat anda gunakan secara static method`
### Method `Toast.create`

#### Deskripsi

Method ini digunakan untuk membuat dan menampilkan pesan toast di layar dengan berbagai opsi penyesuaian.

### Parameter

#### ToastButton

```php
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  htmlAttributes?: { [key: string]: any };
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

#### ToastOptions

```php
interface ToastOptions {
  header?: string;
  message?: string;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  animated?: boolean;
  icon?: string;
  color?: 'danger' | 'dark' | 'light' | 'medium' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
}
```

## Contoh Penggunaan

```javascript
Toast.create({
  message: "Hello World",
  position: "middle",
  color: "dark",
  mode: "ios",
});
```

### Method `Toast.position`

```js
Toast.position("bottom");
```

### Method `Toast.color`

```js
Toast.color("dark");
```

### Method `Toast.duration`

```js
Toast.duration(3000);
```

### Method `Toast.icon`

```js
Toast.icon("globe");
```

### Method `Toast.buttons`

```js
Toast.buttons([
  {
    text: "Cancel",
    handler: () => {
      console.log("Cancel clicked");
    },
    //... and more properties ToastButton
  },
  //... and more buttons
]);
```

### Method `Toast.listen`
```js
Toast.listen((event) => { console.log(event) })
```

### Keterangan Tambahan
- Jika parameter `position` tidak disertakan, posisi default toast adalah `'bottom'`.
- Jika parameter `color` tidak disertakan, warna default toast adalah sesuai dengan tema aplikasi.
- Jika parameter `mode` tidak disertakan, mode default toast akan mengikuti mode platform tempat aplikasi berjalan.


Dengan dokumentasi ini, pengguna dapat memahami cara menggunakan method `Toast.create` dan parameter-parameter yang tersedia untuk menyesuaikan tampilan toast sesuai kebutuhan.

