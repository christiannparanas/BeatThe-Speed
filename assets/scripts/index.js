new Vue({
   el: '#app',
   data: {
      pre: true,
      pre1: true,
      pre2: false,
      home: false,
      modeModal: false,
      overModal: false,
      clickCat: {
         add: false,
         sub: false,
         mul: false,
         div: false,
         selectbgcolor: '#0A192F'
      },
      setIn: null,
      // game
      bgColors: ['#d86a87', '#a604a7', '#5cbc7d', '#128e84', '#4aa7d2', '#039688', '#8874A3'],
      gamestart:  false,
      currentBg: {
         backgroundColor: ''
      },
      timerCount: 5,
      num1: 0,
      num2: 0,
      points: 0,
      rightAns: 0,
      randomAns: 0
   },
   watch: {
      timerCount: function() {
         if(this.timerCount === 0) {
            this.nextProb()
         }
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
      },
      // start
      start: function() {
         this.pre = false
         this.home = false
         this.gamestart = true  
         this.timerStart()
         this.changeBgColor()

         // prob
         this.num1 = Math.floor(Math.random() * 20)
         this.num2 = Math.floor(Math.random() * 20)
         this.randomAns = Math.floor(Math.random() * 40)

         // right ans
         this.rightAns = this.num1 + this.num2
      },
      correct: function() {

         if(this.rightAns === this.randomAns) {
            this.points += 1
            this.nextProb()
         } else {
            clearInterval(setIn)
            this.timerCount = 5
            this.gameover()
         }
      },
      wrong: function() {
         if(this.rightAns != this.randomAns) {
            this.points += 1
            this.nextProb()
         } else {
            clearInterval(setIn)
            this.timerCount = 5
            this.gameover()
         }
      },
      gameover: function() {
         this.overModal = true
      },
      navi: function(num) {
         if(num === 1) {
            this.overModal = false
            this.points = 0
            this.start()
         }else if(num === 2) {
            this.home = true
            this.overModal = false
            this.gamestart = false
         }
      },
      nextProb: function() {
         clearInterval(setIn)
         this.timerCount = 5
         this.timerStart()
         this.changeBgColor()

         // prob
         this.num1 = Math.floor(Math.random() * 20)
         this.num2 = Math.floor(Math.random() * 20)
         this.randomAns = Math.floor(Math.random() * 40)

         // right ans
         this.rightAns = this.num1 + this.num2
         if(this.rightAns === this.randomAns) {
            this.nextProb()
         }
      },
      changeBgColor: function() {
         let index = Math.floor(Math.random() * 9)
         
         // return this.bgColors[index]
         this.currentBg.backgroundColor = this.bgColors[index]
      },
      timerStart: function() {
         setIn = setInterval(() => {
            this.timerCount -= 1;
            if(this.timerCount === 0) {
               clearInterval(setIn)
            }
         }, 1000)

      }
   },
   // call the preload function on page load 
   beforeMount() {
      this.preload()
   },


});
