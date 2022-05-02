<template>
    <div class="popup">
        <div class="card pop-inner">
            <slot />    
            
    <button class="popup-close" @click="TogglePopup()">
                    X
                </button>
	<h4>Cotizar Poliza</h4>

    <form  @submit.prevent="crear">
        <div class="form-popup">
            <div class="data-user w-100">
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tipo de Vehículo</label>
                    <select v-model="tvehiculo" class="form-select">
                        <option value="SEDAN" selected>SEDAN</option>
                        <option value="HATCHBACK" selected>HATCHBACK</option>
                        <option value="VAN" selected>VAN</option>
                        <option value="SUV" selected>SUV</option>
                        <option value="PICK UP">PICK UP</option>
                        <option value="MOTOCICLETAS 250cc">MOTOCICLETAS 250cc</option>
                        <option value="MOTO TAXIS">MOTO TAXIS</option>
                        <option value="VEHÍCULO DE CARGA 3-5 TONELADAS">VEHÍCULO DE CARGA 3-5 TONELADAS</option>
                        <option value="VEHÍCULO DE CARGA 6-9 TONELADAS">VEHÍCULO DE CARGA 6-9 TONELADAS</option>
                        <option value="VEHÍCULO DE CARGA 10-14 TONELADAS">VEHÍCULO DE CARGA 10-14 TONELADAS</option>
                    </select>
                </div>
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Modalidad de Pago</label>
                    <select v-model="mpago" class="form-select">
                        <option value="Cobro mensual a domicilio">Cobro mensual a domicilio</option>
                        <option value="Pago mensual mediante Deposito/Transferencia">Pago mensual mediante Deposito/Transferencia (-5%)</option>
                        <option value="Pago en una sola exibición">Pago en una sola exibición (-12%)</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input v-model="nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juan Perez">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input v-model="correo" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="j.perez@httsiniestros.com">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Número de Contacto</label>
                    <input v-model="ncontacto" type="number" class="form-control" id="exampleInputPassword1">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
        </div>
    </div>
</template>

<script>

export default {
	props: ['TogglePopup'],

    name:"danios-terceros",
    data(){
        return {
            
                tvehiculo:"",
                mpago:"",
                nombre:"",
                correo:"",
                ncontacto:""
           
        }
    },
    methods:{

        async crear(){
            const content = {
                    tvehiculo:      this.tvehiculo,
                    mpago:      this.mpago,
                    nombre:       this.nombre,
                    correo:       this.correo,
                    ncontacto:       this.ncontacto,
                }

            await this.axios.post('/sendmail',content).then(response=>{
                console.log(JSON.stringify(response.data, null, 2))
                alert('Cotización enviada! Será enlazado a WhatsApp para hablar con uno de nuestros ejecutivos.')
                window.open('https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D523310899624%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR026Z6h52OzrnLoWiIlNrzUVLGddt8EE0lNgXxykiclIDwV-Io-eE0IPcU&h=AT2je-pmkwHeJkucBplfNGTAXYYxEgbWR8tLThlNHhkaPG-PPQY-NCSFeg2u3DrFcDVW808RLpHLxcbfmU28sBaJ7a2NkI_eDWnxrQC4FfVGeOpcNoy_vUB8DakPqi6tW0VqCDy07OkoUOi-KrwL8mrZTr9KMJ_0JQ', '_blank').focus();
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
