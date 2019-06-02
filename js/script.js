
 
    var colors = [
        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)',
        'rgb(255, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb0, 255, 255)',
    ];
    var myName = 'SAMUEL';
    var firstLetter = 'S'
var nameTogues = ['A','B','C','D','E','F','G','H','I','J',
                    'K','L','M','N','O','P','Q','R','S',
                    'T','U','V','W','X','Y','Z'];
var allAlpha = document.querySelectorAll('.liBtn');
var massageDispay1 = document.querySelector('#span1');
var massageDispay2 = document.querySelector('#span2');
var massageDispay3 = document.querySelector('#span3');

for(var i = 0; i < allAlpha.length; i++){
    //add initial latters to add to the grid
    allAlpha[i].textContent = nameTogues[i];
    //add eventListner to the allAlpha
    
    allAlpha[i].addEventListener('click', function(){
        //assign the clicked letter to a var
       var clickedLetter = this.textContent;
       //compare the clicked letter matchs the pidked later
        if(clickedLetter === firstLetter){
            this.classList.add('ligreen');
            this.style.fontSize = '1.5em';
            // alert('correct');
            massageDispay1.classList.remove('span1');
            massageDispay3.classList.add('span3')
            massageDispay2.classList.add('span2');
            massageDispay3.textContent = 'You are Correct!';
            massageDispay1.textContent= '';
            massageDispay2.textContent = clickedLetter;

        }
        else{
            // alert('worong!');
            this.classList.add('liRed');
            massageDispay1.classList.add('span1');
            massageDispay3.classList.remove('span3');
            massageDispay1.textContent = 'You are Wrong';
            massageDispay3.textContent = ' ';
            gi
        }
    });
}
