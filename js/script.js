

var unList = document.querySelector('#ulPanel');
unList.style.display = 'none'
var palyFunc = document.querySelector('#btn1');
palyFunc.addEventListener('click', function(){
    unList.style.display = 'block'
    var myName = 'SAMUEL';//generatRadomLatter(6);
    var firstLetter = pickLatter();
    var nameTogues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var allAlpha = document.querySelectorAll('.liBtn');
    var massageDispay1 = document.querySelector('#span1');
    var massageDispay2 = document.querySelector('#span2');
    var massageDispay3 = document.querySelector('#span3');

    for (var i = 0; i < allAlpha.length; i++) {
        //add initial latters to add to the grid
        allAlpha[i].textContent = nameTogues[i];
        //add eventListner to the allAlpha

        allAlpha[i].addEventListener('click', function () {
            //assign the clicked letter to a var
            var clickedLetter = this.textContent;
            //compare the clicked letter matchs the pidked later
            if (clickedLetter === firstLetter) {
                this.classList.add('ligreen');
                this.style.fontSize = '1.5em';
                // alert('correct');
                massageDispay1.classList.remove('span1');
                massageDispay3.classList.add('span3')
                massageDispay2.classList.add('span2');
                massageDispay3.textContent = 'You are Correct!';
                massageDispay1.textContent = '';
                massageDispay2.textContent += firstLetter//clickedLetter;

            }
            else {
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
    // function changeLaters (myName){
    //     //loop through all squares
    //     for(var i=0; i< myName.length; i++){
    //         //change each later
    //         myName[i].sy
    //     }
    // }
    function pickLatter(){
       var randomPick = Math.floor(Math.random()*myName.length);
       return myName[randomPick];
    }

    function generatRadomLatter(char){
        //make an array
        var arr = [];
        //add char random letter to arry
        for(var i =0; i<char; i++){
            //get random letter and phush to array;
        }
        return arr;
    }
    function randomletter(){
        //pick latter
        var s = 'S';
        var a = 'A';
        var m = 'M';
        var u = 'U';
        var e = 'E';
        var l = 'L';
        return (s + a + m + u+ e+ l);
    }
});



