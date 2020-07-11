new Vue({
   el: '#app',
   data: {
      pre: true,
      pre1: true,
      pre2: false,
      home: false
   },
   methods: {
      preload: function() {
         setTimeout(() => {
            this.pre1 = false
            this.pre2 = true

            setTimeout(() => {
               this.pre = false
               this.home = true
            }, 2500)

        }, 2000)
      }
   },
   // call the preload function on page load 
   beforeMount() {
      this.preload()
   },


});
