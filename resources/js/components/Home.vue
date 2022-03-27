<template>

<br>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item text-center active">
            <img src="~../images/carousel1.jpg" alt="#">
        </div>
        <div class="carousel-item text-center">
            <img src="~../images/carousel2.jpg" alt="#">
        </div>
        <div class="carousel-item text-center">
            <img src="~../images/carousel3.jpg" alt="#">
        </div>
        <div class="carousel-item text-center ">
            <img src="~../images/carousel4.jpg" alt="#">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
        <span class="visually-hidden ">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon " aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
<br>

<div class="intro">
    <h3>EN HTT NOS OCUPAMOS POR LO QUE TE PREOCUPA</h3>
    <p>Nuestro grupo de expertos te brindarán la protección para tu automóvil, camioneta, camión de carga, flotillas, etc.
        Con una atención eficaz y garantizada las 24 horas del día.</p>
    <br>
    <form class="">
        <div class="form1">
            <div class="data-user w-100">
              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juan Perez">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="j.perez@httseguros.com">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                    <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
            </div>
            <div class="mb-3 w-100 info-user">
                <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</div>
<div class="last-div-group">
    
<div class="last-text">
   <h3>Nuestros agentes se encargarán de darte el servicio que necesitas</h3>
   <span>Con más de 80 elementos distribuidos dentro de la zona metropolitana de Guadalajara, siempre dispuestos a asistir tus necesidades las 24 horas del día.</span>
</div>
<div>
  
</div>
  <img src="~../images/trato_agente.webp" alt="#">

</div>
<br>
</template>
