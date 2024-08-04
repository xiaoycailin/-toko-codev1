# Class: `SwipeSheet`

## Deskripsi

Kelas `SwipeSheet` digunakan untuk membuat dan mengelola elemen modal di halaman web. Kelas ini mendukung berbagai opsi penyesuaian seperti nama, breakpoints, border radius, dan lainnya.

## Properti

### Private

- **\_sheetName** (String | undefined): Nama dari sheet, default 'default'.
- **\_breakpoints** (Number[]): Breakpoints untuk modal, default `[0, 0.75]`.
- **\_initialBreakpoint** (Number): Breakpoint awal modal, default `0.75`.
- **\_ionContent** (Any): Elemen konten untuk modal.
- **\_backdropDismiss** (Boolean): Menentukan apakah modal dapat ditutup dengan klik pada backdrop, default `false`.
- **\_isOpen** (Boolean): Menentukan apakah modal terbuka saat inisialisasi, default `false`.
- **\_styleContent** (CSSStyleDeclaration | undefined): Gaya CSS untuk konten modal.
- **\_borderRadius** (Object): Radius border untuk sisi atas kiri dan kanan modal, default `{ topLeft: '10px', topRight: '10px' }`.
- **\_followNavigation** (Boolean): Menentukan apakah modal mengikuti navigasi halaman, default `false`.

### Public

- **stateNavigation** (Boolean): Status navigasi, default `false`.

## Constructor

```typescript
constructor(props?: {
    name?: string,
    breakpoints?: number[],
    initialBreakpoint?: number,
    backdropDismiss?: boolean,
    isOpen?: boolean,
    borderRadius?: {
        topLeft: string,
        topRight: string
    },
    styleContent?: CSSStyleDeclaration,
    followNavigation: boolean
})
```

- props (Object, opsional): Obyek opsi untuk inisialisasi modal.
  - **name (String, opsional)**: Nama untuk modal.
  - **breakpoints (Number[], opsional)**: Breakpoints untuk modal.
  - **initialBreakpoint (Number, opsional)**: Breakpoint awal modal.
  - **backdropDismiss (Boolean, opsional)**: Menentukan apakah modal dapat ditutup dengan klik pada backdrop.
  - **isOpen (Boolean, opsional)**: Menentukan apakah modal terbuka saat inisialisasi.
  - **borderRadius (Object, opsional)**: Radius border untuk sisi atas kiri dan kanan modal.
  - **styleContent (CSSStyleDeclaration, opsional)**: Gaya CSS untuk konten modal.
  - **followNavigation (Boolean, opsional)**: Menentukan apakah modal mengikuti navigasi halaman.

### Method

`create(content: string): this`

Membuat elemen modal dan menambahkannya ke dalam halaman.

- content (String): Konten yang akan ditampilkan dalam modal.
- Returns: Instance dari kelas `SwipeSheet`.

`open(): this`

Membuka modal dengan efek klik pada elemen open-modal.

- Returns: Instance dari kelas `SwipeSheet`.

`close(): this`

Menutup modal dan mengembalikan status navigasi jika diatur.

- Returns: Instance dari kelas `SwipeSheet`.

`removeAfterClose(): this`

Menghapus elemen modal setelah ditutup.

- Returns: Instance dari kelas `SwipeSheet`.

### Contoh Penggunaan

```ts
const mySheet = new SwipeSheet({
  name: "example",
  breakpoints: [0, 0.5, 1],
  initialBreakpoint: 0.5,
  backdropDismiss: true,
  isOpen: true,
  borderRadius: { topLeft: "15px", topRight: "15px" },
  styleContent: { padding: "20px", marginTop: "30px" },
  followNavigation: true,
});

mySheet.create("<p>Hello, this is a modal!</p>").open();
```

Dengan dokumentasi ini, pengguna dapat memahami cara menggunakan kelas Sheet dan metode-metode yang tersedia untuk menyesuaikan dan mengelola tampilan modal sesuai kebutuhan.
