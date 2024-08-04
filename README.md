# Link Dokumentasi

- [Dokumentasi Modal](https://github.com/xiaoycailin/-toko-codev1/blob/main/docs/modal.md)

- [Dokumentasi SwipeSheet](https://github.com/xiaoycailin/-toko-codev1/blob/main/docs/sheet.md)

- [Dokumentasi Toast](https://github.com/xiaoycailin/-toko-codev1/blob/main/docs/toast.md)

#### Berikut adalah cdn link `Operator Parser` yang bisa anda gunakan 
```html
<script src="https://cdn.jsdelivr.net/gh/xiaoycailin/-toko-codev1@main/js/operator-parser@1.0.0.js"></script>
```
#### Berikut adalah cdn link `Utility Component` yang bisa anda gunakan 
```html
<script src="https://cdn.jsdelivr.net/gh/xiaoycailin/-toko-codev1@main/js/tcodexionic@1.0.0.js"></script>
```



### Contoh Penggunaan `Modal`

```typescript
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



### Contoh Penggunaan `SwipeSheet`

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

### Contoh Penggunaan `Toast`

```javascript
Toast.create({
  message: "Hello World",
  position: "middle",
  color: "dark",
  mode: "ios",
});
```
