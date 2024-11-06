let API ="https://dummyjson.com/products"


let meykap = document.querySelector(".meykap")

async function getmeykaps () {
    try {
        const res = await fetch(API)
        const data = await res.json ()
        console.log (data);

        meykap.innerHTML = data.products.map((item) =>{
            return`
            <div class="girls">
            <img src =" ${item.images}" />
            <div  class="mm">
            <h4>${item.title} </h4>
            </div>
                </div>`
        }).join ("")
    } catch (error){
console.log(error)
    }
}  
getmeykaps()
 
// async function getmMykap(){
//     try {
//         const res = await fetch(API)
//         const data = await res.json()

//         console.log(data);
//    showMeykap(data.meykap)
         
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getmMykap()

// function showUser(data){
//     random.innerHTML = data.map((item) => {
//         return`
//         <div class="pp">
//       <img src=" ${item.title }"  />
//          <p>${item.image}</p>
//         </div>
//         `
//     }).join("")
// }