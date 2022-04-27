<template>
    <div class="popup">
        <div class="card pop-inner">
            <slot />    
            
    <button class="popup-close" @click="TogglePopup()">
                    X
                </button>
	<h4>Cotizar Poliza</h4>

    <form class="">
        <div class="form-popup">
            <div class="data-user w-100">
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tipo de Vehículo</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sedan, SUV, Moto, Vehículo de Carga, ...">
                </div>
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Modalidad de Pago</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                </div>
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Servicios Adicionales</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="j.perez@httsiniestros.com">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Número de Contacto</label>
                    <input type="number" class="form-control" id="exampleInputPassword1">
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
	props: ['TogglePopup']
}
</script>
