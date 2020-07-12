new Vue({
   el: '#app',
   data: {
      pre: false,
      pre1: false,
      pre2: false,
      home: true,
      modeModal: false,
      clickCat: {
         add: false,
         sub: false,
         mul: false,
         div: false,
      }
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
      },
      selectCat: function(num) {
         if(num === 1) {
            this.clickCat.add = true
            this.clickCat.sub = this.clickCat.mul = this.clickCat.div = false
         }else if(num === 2) {
            this.clickCat.sub = true 
            this.clickCat.add = this.clickCat.mul = this.clickCat.div = false
         }else if(num === 3) {
            this.clickCat.mul = true
            this.clickCat.add = this.clickCat.sub = this.clickCat.div = false
         }else if(num === 4) {
            this.clickCat.div = true
            this.clickCat.add = this.clickCat.sub = this.clickCat.mul = false
         }
      }
   },
   // call the preload function on page load 
   beforeMount() {
      this.preload()
   },


});
