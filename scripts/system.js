console.log("test")


document.querySelectorAll("section>div>div>a").forEach(e=>{
    e.addEventListener("click", up);
    console.log(e);
  
    
    function up(){
        console.log(this);
        console.log(this.parentElement);
        this.parentElement.classList.toggle("Zoom");
        this.parentElement.parentElement.parentElement.classList.toggle("Pause");
        // document.querySelector("section>div").style = "animation: tourne  linear -304s;"
    };
})

