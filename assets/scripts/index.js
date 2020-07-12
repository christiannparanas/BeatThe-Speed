new Vue({
   el: '#app',
   data: {
      pre: true,
      pre1: true,
      pre2: false,
      home: false,
      modeModal: false,
      clickCat: {
         add: false,
         sub: false,
         mul: false,
         div: false,
         selectbgcolor: '#0A192F'
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
      selmodBg: function(num) {
         let bg;
         if(this.clickCat.add === true && num === 1) {
            bg = { backgroundColor: this.clickCat.selectbgcolor }
         }else if(this.clickCat.sub === true && num === 2) {
            bg = { backgroundColor: this.clickCat.selectbgcolor }
         }else if(this.clickCat.mul === true && num === 3) {
            bg = { backgroundColor: this.clickCat.selectbgcolor }
         }else if(this.clickCat.div === true && num === 4) {
            bg = { backgroundColor: this.clickCat.selectbgcolor }
         }

         return bg;
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
