

function insert(num){
	document.form.tampil.value = document.form.tampil.value + num;
}


function equal(){
	var hasil = document.form.tampil.value;
	document.form.tampil.value = eval(hasil);
}


function clean(){
	document.form.tampil.value = "";
}


function back(){
	var hasil = document.form.tampil.value;
	document.form.tampil.value = hasil.substring(0,hasil.length-1);
}





