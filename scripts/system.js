// console.log("test")


// document.querySelectorAll("section>div>div>a").forEach(e=>{
//     e.addEventListener("click", up);
//     // console.log(e);
  
    
//     function up(){
//         console.log(this);
//         console.log(this.parentElement);
//         this.parentElement.parentElement.parentElement.classList.toggle("Pause");
        
//     };
// })

document.querySelector(".Back").addEventListener("click",Add);

function Add(){
    document.querySelector(".Back").classList.toggle("Back2");
};


