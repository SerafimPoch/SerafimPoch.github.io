let main=document.querySelector('main'),memoryValues=[],memoryTile=[],cardsFlipped=0;const cards=[{id:1,img:'cats_0'},{id:2,img:'cats_1'},{id:3,img:'cats_2'},{id:4,img:'cats_3'},{id:5,img:'cats_4'},{id:6,img:'cats_5'},{id:7,img:'cats_0'},{id:8,img:'cats_1'},{id:9,img:'cats_2'},{id:10,img:'cats_3'},{id:11,img:'cats_4'},{id:12,img:'cats_5'}],shuffle=b=>b.sort(()=>0.5-Math.random()),newBoard=()=>{cardsFlipped=0;let b=shuffle(cards);b.forEach(c=>{main.insertAdjacentHTML('beforeend','<div class="flip-container ">               <div onclick="handleClick(this,\''+c.img+'\')" class="flipper " id='+c.id+' >               <div  class="front"></div>               <div  class="back '+c.img+'"></div>               </div>               </div>')})},hide=()=>{let b=document.getElementById(memoryTile[0]),c=document.getElementById(memoryTile[1]);b.className='flipper hide',c.className='flipper hide',memoryValues=[],memoryTile=[]},newGener=()=>{alert('You win!'),main.innerHTML='',newBoard()},flipBack=()=>{let b=document.getElementById(memoryTile[0]),c=document.getElementById(memoryTile[1]);b.classList.remove('open'),c.classList.remove('open'),memoryValues=[],memoryTile=[]},handleClick=(b,c)=>{2>memoryValues.length&&(b.classList.add('open'),0==memoryValues.length?(memoryValues.push(c),memoryTile.push(b.id)):1==memoryValues.length&&(memoryValues.push(c),memoryTile.push(b.id),memoryValues[0]==memoryValues[1]?(cardsFlipped+=2,setTimeout(hide,800),cardsFlipped==cards.length&&setTimeout(newGener,1200)):setTimeout(flipBack,800)))};newBoard();






    



