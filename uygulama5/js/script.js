
document.getElementById('hesapla').addEventListener("click", hesaplajs);
function hesaplajs(){

    var jskilo = document.querySelector('.kilo').value;
    var jsboy = document.querySelector('.boy').value;
    if (jskilo=='' ||jsboy==''){

    }
    else{
        var sonuc = parseFloat(jskilo)/(parseFloat(jsboy)*parseFloat(jsboy));
        var jskategori ='';
        if(sonuc<18.5){
            jskategori='Zayıf';
            document.getElementById('a').style.borderBottom='2px solid  #181818';
            document.getElementById('b').style.borderBottom='0px solid  #181818';
            document.getElementById('c').style.borderBottom='0px solid  #181818';
            document.getElementById('d').style.borderBottom='0px solid  #181818';
        }
      else if(sonuc>18.5 && sonuc<25){
            jskategori='Normal';
            document.getElementById('b').style.borderBottom='2px solid  #181818';
            document.getElementById('a').style.borderBottom='0px solid  #181818';
            document.getElementById('c').style.borderBottom='0px solid  #181818';
            document.getElementById('d').style.borderBottom='0px solid  #181818';
        }
        else if(sonuc>25 && sonuc<30){
            jskategori='Kilolu';
            document.getElementById('c').style.borderBottom='2px solid  #181818';
            document.getElementById('a').style.borderBottom='0px solid  #181818';
            document.getElementById('b').style.borderBottom='0px solid  #181818';
            document.getElementById('d').style.borderBottom='0px solid  #181818';
        }
        else if(sonuc>25 && sonuc<30){
            jskategori='Obez';
            document.getElementById('d').style.borderBottom='2px solid  #181818';
            document.getElementById('a').style.borderBottom='0px solid  #181818';
            document.getElementById('b').style.borderBottom='0px solid  #181818';
            document.getElementById('c').style.borderBottom='0px solid  #181818';
        }   
        document.querySelector('.vki').textContent=`V K İ : ${sonuc.toFixed(2)}`;
        document.querySelector('.kategori').textContent=`Kategori : ${jskategori}`;
    }
    
};

document.getElementById('temizle').addEventListener("click", temizlejs);
function temizlejs(){
document.querySelector('.kilo').value='';
document.querySelector('.boy').value='';
document.querySelector('.vki').textContent=`V K İ :`;
document.querySelector('.kategori').textContent=`Kategori :`;
document.getElementById('a').style.borderBottom='0px solid  #181818';
document.getElementById('b').style.borderBottom='0px solid  #181818';
document.getElementById('c').style.borderBottom='0px solid  #181818';
document.getElementById('d').style.borderBottom='0px solid  #181818';
};