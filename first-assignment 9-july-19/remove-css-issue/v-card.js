



//save contact click on download button

document.getElementById('saveContact').addEventListener("click", function(){
    document.getElementById('contactData-container').classList.add('fabOnTop');
    document.getElementById('fixed-blur-bgd').style.display='block';
    document.getElementById('chat').classList.add('is-visible');
})
//remove class click on cross

document.getElementById('icon-fab-close').addEventListener("click", function(){ 
  
    //alert('close clicked')
    document.getElementById('contactData-container').classList.remove('fabOnTop');
    document.getElementById('fixed-blur-bgd').style.display='none';
    document.getElementById('chat').classList.remove('is-visible');

})

