const ps = require("prompt-sync");
const entrer = ps();
const secret = Math.floor(Math.random() * 11);
const coups  = 3;
let i = 0;
let num;

while(i<coups){
num = entrer("Entrez un nombre entre 0 et 9");
i++;
	if(num<0 || num >9)
	console.log("Chiffre inccorect");
	else
		if(num == secret){
		console.log("Bien joué");
		break;
		}
		else console.log("Reesayez");
		
}


