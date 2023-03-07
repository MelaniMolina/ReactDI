function Producto({titulo,descripcion="sin descripcion",direccion}){
    console.log(titulo,descripcion,direccion)
    return <h1>{titulo}, y la descripcion es: {descripcion}</h1>
}
export default Producto