<template>
<br>
<div class="intro">
    <h2>INSTRUCCIONES EN CASO DE ACCIDENTE</h2>
    <hr class="w-oline">
    <br>
    <h5>Mantener la calma y no mueva su vehículo</h5>
    <h5>Marque al teléfono de emergencia y proporcione datos del conductor</h5>
    <h5>Proporcione el nombre del titular de la póliza y número de la misma, datos del vehículo, placas, color etc.</h5>
    <h5>Proporcione la ubicación exacta de donde se suscitó el siniestro</h5>
    <h5>Proporcione algún teléfono donde localizarlo.</h5>
    <h5>No acepte ningún arreglo, ni negociación.</h5>
    <h5>Espere en el lugar del sinestro hasta que llegue el ajustador para asesorarlo.</h5>
    
</div>
    <br>
    <div class="row">
    <div class="">
      <div class="card">
        <div class="card-body">
    <form @submit.prevent="quejaSugerencia">
        <div class="form1">
            <div class="data-user w-100">
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre Completo</label>
                    <input type="text" v-model="nombre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juan Perez">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input type="email" v-model="correo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="j.perez@httseguros.com">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                    <input type="number" v-model="numero" class="form-control" id="exampleInputPassword1">
                </div>
            </div>
            <div class="mb-3 w-100 info-user">
                <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                <textarea class="form-control" v-model="comentario" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</div>
</div>
</div>
</div>

<br>
</template>

<script>
export default {
    
    name:"quejas-sugerencias",
    data(){
        return {
            
                nombre:"",
                correo:"",
                numero:"",
                comentario:""
           
        }
    },
    methods:{

        async quejaSugerencia(){
            const formQueja = {
                
                    nombre:       this.nombre,
                    correo:       this.correo,
                    numero:       this.numero,
                    comentario:       this.comentario
                }

            await this.axios.post('/queja-sugerencia',formQueja).then(response=>{
                alert('Atenderemos tu duda, queja o sugerencia lo antes posible.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>