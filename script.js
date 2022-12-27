/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 250;
CANVAS_HEGIHT = canvas.height = 500;
let numberOfEnemies = 15;
let enemySize = 3;
gameFrame = 0;
const enemiesArray = [];

    const numberSlider = document.getElementById('numberSlider')
    numberSlider.value = numberOfEnemies;
    const showNumber = document.getElementById('showNumber')
    showNumber.innerHTML = numberOfEnemies;
    numberSlider.addEventListener('change', function(e){
        numberOfEnemies = e.target.value;
        showNumber.innerHTML = e.target.value;
    })
    
    
    const sizeSlider = document.getElementById('sizeSlider')
    sizeSlider.value = enemySize;
    const showSize = document.getElementById('showSize')
    showSize.innerHTML = enemySize
    sizeSlider.addEventListener('change', function(e){
        enemySize = e.target.value;
        showSize.innerHTML = e.target.value;
    })
    
    class Enemy {
        constructor(){
            this.image = new Image();
            this.image.src = './enemies/enemy1.png'
            this.spriteWidth = 293;
            this.spriteHeight = 155;
            this.width = this.spriteWidth / enemySize;
            this.height = this.spriteHeight / enemySize;
            this.x = Math.random() * (CANVAS_WIDTH - this.width);
            this.y = Math.random() * (CANVAS_HEGIHT - this.height);
            this.frame = 0;
            this.flapSpeed = Math.floor(Math.random() * 2 -4)
        }
        update(){
            this.x += Math.random() * 3 - 1.5;
            this.y += Math.random() * 3 - 1.5;
            // animate sprites
            if (gameFrame % this.flapSpeed === 0){
                this.frame > 4 ? this.frame = 0 : this.frame++;
            }
        }
        draw(){
            ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
        }
    };
    for (let i = 0; i < numberOfEnemies; i++){
        enemiesArray.push(new Enemy());
    }
    
    function animate() {
        ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEGIHT);
        enemiesArray.forEach(enemy => {
                enemy.draw()
                enemy.update()
            });
            gameFrame ++;
            requestAnimationFrame(animate);
        }
    animate()

//project 3 complete
//https://www.youtube.com/watch?v=GFO_txvwK_c&t=1600s
