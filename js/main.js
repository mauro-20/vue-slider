// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.;
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.;


const app = new Vue({
  el: '#root',
  data: {
    images: [
      'https://media.gettyimages.com/photos/chairoplane-picture-id182032452?k=20&m=182032452&s=612x612&w=0&h=2yGaGWEMa0xQrJ5aJUwk5Cw0q7JxrnfRlyySLrdY6HU=',
      'https://media.gettyimages.com/photos/colorful-holiday-carousel-horse-xxxlarge-picture-id171345759?k=20&m=171345759&s=612x612&w=0&h=jiumpU99jkZBU_1xIvrwrvRquk_AodiTfGPnD0s_9kA=',
      'https://media.gettyimages.com/photos/carefree-people-having-fun-on-chain-swing-ride-in-amusement-park-picture-id1179330660?k=20&m=1179330660&s=612x612&w=0&h=eaLuq0AXa_4amVqy2W7JV96tSWrL3UE5nTw3aYOl5ko='
    ],
    imageIndex: 0
  },
  methods: {
    nextImg: function () {
      this.imageIndex++;
      if (this.imageIndex >= this.images.length) {
        this.imageIndex = 0;
      }
    },
    prevImg: function () {
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.images.length - 1;
      }
    },
    selectBulletImage: function (index) {
      this.imageIndex = index;
    }
  },
  mounted: function () {
      setInterval(() => {
        this.nextImg()
       }, 3000);
  }
});

