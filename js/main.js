var app = new Vue({
  el:"#app",

  data: {
    title:'Search In Wikipedia',
    newItem: '',
    items: [

    ]
  },

  methods:{
    addItem(value){
      const newEntry = {
        text: this.newItem,
      }

      if(this.newItem.length) {
        this.items.push(newEntry)
        this.newItem = ''
      }
    },
    deleteItem(index){
      this.items.splice(index,1)
    }
  },

  filters: {
    capitalize(value){
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    },
    url(value){
      if(!value) return '';
      value = value.toString();
      return 'https://en.wikipedia.org/wiki/' + value.toLowerCase();
    },
    lowercase(value){
      if(!value) return '';
      value = value.toString();
      return value.toLowerCase();
    }
  }
})
