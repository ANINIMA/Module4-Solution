

var names = new Array();

names[0] = 'Yaakob';
names[1] = 'Josue';
names[2] = 'juan';
names[3] = 'Ponsio';
names[4] = 'Mustafa';
names[5] = 'jazmin';
names[6] = 'jordan';
names[7] = 'Rasputin';
names[8] = 'Josselin';
names[9] = 'Paris';

for (var i =0; i < names.length; i++) {


    if (names[i].charAt(0) =='J'   || names[i].charAt(0) =='j') {
        console.log('Good bye '+ names[i]);
    } else {
        console.log('Hello ' + names[i]);
    }



}