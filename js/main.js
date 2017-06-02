var app = new Vue({
  el:"#app",

  data: {
    title:'Search X',
    newItem: '',
    btnText: 'Add Item',
    blankText: 'Please add above for search',
    clear: 'CLEAR ALL',
    items: [

    ]
  },

  methods:{
    addItem(value){
      const newEntry = {
        text: this.newItem
      }

      if(this.newItem.length) {
        this.items.push(newEntry)
        this.newItem = ''
      }
    },
    deleteItem(index){
      this.items.splice(index,1)
    },
    deleteAll(){
      this.items.splice(0,this.items.length)
    }
  },

  filters: {
    capitalize(value){
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    },
    lowercase(value){
      if(!value) return '';
      value = value.toString();
      return value.toLowerCase();
    },
    url(value){
      if(!value) return '';
      value = value.toString();
      return 'https://en.wikipedia.org/wiki/' + value.toLowerCase();
    },
    google(value){
      if(!value) return '';
      value = value.toString();
      return 'https://www.google.com.hk/?gws_rd=ssl#safe=strict&q=' + value.toLowerCase();
    }
  }
})
