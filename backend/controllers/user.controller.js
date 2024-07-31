export const testCont =() =>{
    console.log('Si funcina la conexion de cliente')
}
mvc.create({
    nombre:'Emily',
    apellido:"Macias"
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default testCont()