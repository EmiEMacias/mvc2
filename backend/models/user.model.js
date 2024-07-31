
const esquema_mvc= new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    }
})

const mvc = mongoose.model('mvc', esquema_mvc)
