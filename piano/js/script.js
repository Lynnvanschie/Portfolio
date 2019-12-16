
var toon1 = ['sfx/F.wav', 'sfx/Gb.wav', 'sfx/G.wav', 'sfx/Ab.wav', 'sfx/A.wav', 'sfx/Bb.wav', 'sfx/B.wav', 'sfx/C.wav', 'sfx/Db.wav', 'sfx/D.wav', 'sfx/Eb.wav', 'sfx/E.wav'];
//Bron piano geluiden: https://freesound.org/people/pinkyfinger/packs/4409/ //
var toon2 = ['sfx/g1.flac', 'sfx/g2.flac', 'sfx/g3.flac', 'sfx/g4.flac', 'sfx/g5.flac', 'sfx/g6.flac', 'sfx/g7.flac', 'sfx/g8.flac', 'sfx/g9.flac', 'sfx/g10.flac', 'sfx/g11.flac', 'sfx/g12.flac'];
//Bron gitaar geluiden: https://freesound.org/people/ohac/packs/21602/
var toon3 =  ['sfx/d1.wav', 'sfx/d2.wav', 'sfx/d3.wav', 'sfx/d4.wav', 'sfx/d5.wav', 'sfx/d6.wav', 'sfx/d7.wav', 'sfx/d8.wav', 'sfx/d9.wav', 'sfx/d10.wav', 'sfx/d11.wav', 'sfx/d12.wav'];
//bron drum geluiden: https://freesound.org/people/DWSD/packs/11575/
var mijnGeluid

//variabelen toetsen
var toetsF = document.querySelector('.white_f')
var toetsGb = document.querySelector('.black_gb')
var toetsG = document.querySelector('.white_g')
var toetsAb = document.querySelector('.black_ab')
var toetsA = document.querySelector('.white_a')
var toetsBb = document.querySelector('.black_bb')
var toetsB = document.querySelector('.white_b')
var toetsC = document.querySelector('.white_c')
var toetsDb = document.querySelector('.black_db')
var toetsD = document.querySelector('.white_d')
var toetsEb = document.querySelector('.black_eb')
var toetsE = document.querySelector('.white_e')

//speelt geluid af
function speelAf (sound){
	var knop1 = document.getElementById('knop1');
	var knop2 = document.getElementById('knop2');
	var knop3 = document.getElementById('knop3');
	
	if(knop1.checked === true){
		mijnGeluid = new Audio (toon1 [sound])
	} else if (knop2.checked === true){
		mijnGeluid = new Audio (toon2 [sound])
	} else if (knop3.checked == true){
		mijnGeluid = new Audio (toon3 [sound])
	}
	
	mijnGeluid.play();
}

//functie selecteren geluid bij toetsen toetsenbord
function keyPress (key){
	switch (key){
		case 65: //A
		 	speelAf(0);
		 	break

		case 87: //W
		 	speelAf(1);
		 	break

		 case 83: //S
		 	speelAf(2);
		 	break

		 case 69: //E
		 	speelAf(3);
		 	break

		 case 68: //D
		 	speelAf(4);
		 	break

		 case 82: //R
		 	speelAf(5);
		 	break

		 case 70: //F
		 	speelAf(6);
		 	break

		 case 71: //G
		 	speelAf(7);
		 	break

		 case 89: //Y
		 	speelAf(8);
		 	break

		 case 72: //H
		 	speelAf(9);
		 	break

		 case 85: //U
		 	speelAf(10);
		 	break

		 case 74: //J
		 	speelAf(11);
		 	break
	}
}

//Loop
//function herhaling(){
//	var knop1 = document.getElementById('knop1');
//	var knop2 = document.getElementById('knop2');
//
//	if(knop2.checked == true){
//		for (i = 0; i <2; i++) {
//			console.log('2x')
//		}
//	}
//	else if (knop1.checked == true){
//		console.log('test')
//	}
//}
//Bron voor ophalen input van radiobuttons: https://www.youtube.com/watch?v=r3Oc4IUP0XI

//events klikken
toetsF.addEventListener('click', function(){ speelAf(0)}, false);
toetsGb.addEventListener('click', function(){ speelAf(1)}, false);
toetsG.addEventListener('click', function(){ speelAf(2)}, false);
toetsAb.addEventListener('click', function(){ speelAf(3)}, false);
toetsA.addEventListener('click', function(){ speelAf(4)}, false);
toetsBb.addEventListener('click', function(){ speelAf(5)}, false);
toetsB.addEventListener('click', function(){ speelAf(6)}, false);
toetsC.addEventListener('click', function(){ speelAf(7)}, false);
toetsDb.addEventListener('click', function(){ speelAf(8)}, false);
toetsD.addEventListener('click', function(){ speelAf(9)}, false);
toetsEb.addEventListener('click', function(){ speelAf(10)}, false);
toetsE.addEventListener('click', function(){ speelAf(11)}, false);

//events toetsen
document.addEventListener("keydown", function(e) {
	keyPress(e.keyCode);
}, false);

//testen keycodes
//document.addEventListener("keydown", function(e) {
 	//console.log("keydown: " + e.keyCode);
//}, false);