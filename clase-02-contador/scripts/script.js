var app = new Vue({
  el: "#app",
  data: {
    numeroInicial: 0,
    cantClicks: 0,
  },
  methods: {
    incrementar() {
        this.cantClicks++;
      if (this.numeroInicial >=0) {
        this.numeroInicial++;
      }
    },
    decrementar(){
        this.cantClicks++;
      if (this.numeroInicial >=1) {
        this.numeroInicial--;
      }
    },
  },
  computed: {
    numeroAlCuadrado() {
      return this.numeroInicial ** 2;
    },
  },
});
