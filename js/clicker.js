$(document).ready(function () {
    var plus = $('.plus');
    var moins = $('.moins');
    var unite = $('.nombre-1');
    var dizaine = $('.nombre-2');
    var centaine = $('.nombre-3');
    var millier = $('.nombre-4');
    var compteur = 0;

    function changeCompteur(){
        var output = [];
        var sNumber = compteur.toString();
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        }
        unite.text(sNumber[sNumber.length-1]);

        if(sNumber[sNumber.length-2]){
            dizaine.text(sNumber[sNumber.length-2]);
        }else{
            dizaine.text(0);
        }

        if(sNumber[sNumber.length-3]){
            centaine.text(sNumber[sNumber.length-3]);
        }else{
            centaine.text(0);
        }

        if(sNumber[sNumber.length-4]){
            millier.text(sNumber[sNumber.length-4]);
        }else{
            millier.text(0);
        }
    };

    plus.click(function(){
        compteur++;
        changeCompteur()
    })
    plus.vibrate("short");

    moins.click(function(){
        compteur--;
        changeCompteur()
    })
    moins.vibrate("short");
});