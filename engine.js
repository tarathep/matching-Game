
var idtmp;
var id;
var cout=0;
var words;
var use=   ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
var cardID=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
var color = ['#e60000','#ff8000','#ffcc00','#73e600','#00ffaa','#00e6e6','#0077b3','#0033cc','#b366ff','#cc33ff','#ff00ff','#ff00bf','#ff3399','#ff0066','#cc0000','#cc6600'];
var indexcolor=0;
var coutclick=0;
function flip(cardname){
          $("#"+cardname).flip(true);		  
}
function unflip(cardname){
          $("#"+cardname).flip(false); 	  
}
function disableObj(){
	//document.getElementById("cardfront").disabled = true;
	flip('#card-1');
}

$(function(){
	
	for(var i=1;i<33;i++){
		$("#card-"+i).flip();
	}
});

function setSelected(id){
	init(id);
	/*
	coutclick++;
	if(coutclick>=3){
		alert("maxx"+coutclick);
		flip('card-'+id);
		//unlock();
	}else{
		
	}
	*/
}
function unlock(){
	setTimeout(function () {
		coutclick=0;
    }, 2000);
}

function init(id){
	cout++;
		if(cout==1){
			this.id = cardID[id];
			idtmp = id;
		}else{
			if(idtmp==id){
				//alert("duplicate!!");
			}else{
				if(this.id==cardID[id]){
					//alert("true");
					anstrue('cardback'+idtmp,'cardback'+id);
					idtmp='';
				}else{
					stateChange('card-'+id,'card-'+idtmp);
				}
				cout=0;	
			}
			
		}
}

function stateChange(cardname1,cardname2) {
    setTimeout(function () {
		unflip(cardname1);
		unflip(cardname2);
		
    }, 2000);
}
function anstrue(card1,card2){
	setTimeout(function () {
		//alert(card1+" "+card2);
		var div1 = document.getElementById( card1 );
		div1.style.backgroundColor=color[indexcolor];
		var div2 = document.getElementById( card2 );
		div2.style.backgroundColor=color[indexcolor];
		if(indexcolor==16){
			alert("Finish");
		}
		indexcolor++;
		//coutclick=0;
    }, 1000);
}

function Random(){
	var x = Math.floor((Math.random() * 32) + 1);
	return x;
}

function Switch(){
	var tmp;
	var check=false;
	for(var i=0;i<32;i++){
		if(i==0){
			use[i]=Random();
		}else{
			do{
				check = false;
				tmp = Random();
				for(var j=0;j<use.length;j++){
					if(use[j]==tmp){
						check=true;
					}
				}
				use[i]=tmp;
			}while(check);
		}
	}
	//alert(use);
}

function setCards(){
	
	var que = ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
	var ans = ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
	
	for(var i=0;i<16;i++){
		que[i] = words[i].split(",")[0];
		ans[i] = words[i].split(",")[1];		
	}
	//alert(words);
	//document.getElementById('out').innerHTML = ans;
	var x=0;
	for(var i=0;i<16;i++){
		document.getElementById('cb'+use[x]).innerHTML=que[i];
		cardID[use[x]] = i;
		x++;
		document.getElementById('cb'+use[x]).innerHTML=ans[i];
		cardID[use[x]] = i;
		x++;
	}
	//alert(cardID[18]);
}

var fileInput = document.getElementById("csv"),
    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
		
		words = reader.result.split("\n"); //index is id
		//document.getElementById('out').innerHTML= words;
		Switch();
		setCards();
        
			
        };
        reader.readAsText(fileInput.files[0],"UTF-8");
    };

fileInput.addEventListener('change', readFile);















	  