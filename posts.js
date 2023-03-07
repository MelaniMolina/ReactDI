 export const Posts = () =>{
    return <button onClic={()=>
    fetch('').then(response => response.json()).then(data => console.log(data)).catch(console.error(error))
    }>
      Traer Datos
    </button>
}