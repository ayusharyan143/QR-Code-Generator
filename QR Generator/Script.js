const qrText = document.getElementById('qr-text') ; 
const sizes = document.getElementById('sizes')  ; 
const downlodebtn = document.getElementById('downloadBtn'); 
const gentratebtn = document.getElementById('generateBtn'); 
const qrbody = document.querySelector('.qr-body')  ;    


let size = sizes.value ;   

sizes.addEventListener( 'change' , (e) => {

    size = e.target.value ; 

    isEmptyInput() ;
})


gentratebtn.addEventListener( 'click' , (e) => {

    e.preventDefault() ;

    isEmptyInput() ;

})


// Input Function Button working 


function isEmptyInput()
{

    if( qrText.value.length > 0 )
    {
        GenerateQRcode();
    }
    else    
    {
        alert("Enter the Text or URL to generate you QR code ");
    }
}


// Generate QR Function Button working 


function GenerateQRcode()
{
    qrbody.innerHTML = "" ;

    new QRCode(qrbody , {

        text : qrText.value ,
        height : size , 
        width : size , 
        colorLight : "#fff" ,
        colorDark : "#000" ,
        
    });

}




// Download Button working 

downlodebtn.addEventListener( 'click' , () => {

    let img = document.querySelector('.qr-body img') ;

    if( img !== null )
    {
        let imgAttribute = img.getAttribute('src') ;
        downlodebtn.setAttribute("href" , imgAttribute ) ;

    }
    else
    {
        downlodebtn.setAttribute( "href" , `${document.querySelector('canvas').toDataURL()}`) ;
    }
});