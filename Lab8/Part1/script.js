var indexValue =1;
showImg(indexValue);
function btm_slide(e){
    showImg(indexValue = e);
}
function side_slide(e){
    showImg(indexValue += e);
}
function showImg(e){
    var i;
    const img= document.querySelectorAll('img');
    const sliders= document.querySelectorAll('.btm-sliders span');
    if(e> img.length){
        indexValue=1; //return  the first img
    }
    if(e<1){
        indexValue = img.length; //go to last img
    }
    for(i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    for(i=0;i<img.length;i++){
        sliders[i].style.background="rgba(255,255,255,0.1)";
    }
    img[indexValue-1].style.display="block";
    sliders[indexValue-1].style.background="white";
}