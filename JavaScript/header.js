
document.getElementById('ham').addEventListener('click',function(){
    console.log("clicked!");
    let nav_menu = document.querySelector('.navigation');
    nav_menu.classList.toggle('show');
});



/*
function showFunction(){
    let y = document.querySelector(".nav");
    if(y.style.display === "block"){
        y.style.display = "none";
    }
        else{
            y.style.display="block";
    }
}
*/

    
