new Vue({
   el: '#app',
   data: {
      pre1: true,
      pre2: false
   },
   methods: {
      preload: function() {
         setTimeout(() => {
            this.pre1 = false
            this.pre2 = true

        }, 2000)
      }
   },
   // call the preload function on page load 
   beforeMount() {
      this.preload()
   },


});
