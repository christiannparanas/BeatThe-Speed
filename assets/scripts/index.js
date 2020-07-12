new Vue({
   el: '#app',
   data: {
      pre: false,
      pre1: false,
      pre2: false,
      home: true,
      modeModal: false 
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
      },
      mModal: function() {
         setTimeout(() => {
            this.modeModal = true
         }, 300)
      },
      closemModal: function() {
         this.modeModal = false
      }
   },
   // call the preload function on page load 
   beforeMount() {
      this.preload()
   },


});
