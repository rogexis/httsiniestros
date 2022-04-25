<template>
  <br />
  <div class="row">
    <div class="coll">
      <div class="card abcard">
        <div class="card-body">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel">
            <div class="carousel-inner carousel-1">
              <div class="carousel-item active">
                <img src="~../videos/video1.gif" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../videos/video2.gif" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/carusel_3.jpg" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/carusel_4.jpg" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/carusel_5.jpg" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/carusel_6.jpg" class="w-100" alt="#" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
    </div>
    <br>
    <div class="colr">
      <div class="card">
        <div class="card-body">
          <div class="short-w">
            <h5>Cotiza tu seguro en Línea</h5>
            <p style="color: aliceblue">
              - Diferible hasta a 10 meses.<br />
              - 5% descuento si su pago mensual es mediante depósito o
              transferencia.<br />
              - 12% si el pago es de contado.
            </p>
          </div>
          
          <form class="">
            <div class="form1">
              <div class="data-user w-100">
                <div class="mb-3 thrid">
                  <button type="submit" class="btn btn-primary">Daños a Terceros</button>
                  
                </div>
                
              </div>
              <div class="mb-3 w-100 info-user">
                <div class="mb-3 thrid">            
                    <a class="btn btn-primary" onclick="mialerta();" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D523310899624%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR026Z6h52OzrnLoWiIlNrzUVLGddt8EE0lNgXxykiclIDwV-Io-eE0IPcU&h=AT2je-pmkwHeJkucBplfNGTAXYYxEgbWR8tLThlNHhkaPG-PPQY-NCSFeg2u3DrFcDVW808RLpHLxcbfmU28sBaJ7a2NkI_eDWnxrQC4FfVGeOpcNoy_vUB8DakPqi6tW0VqCDy07OkoUOi-KrwL8mrZTr9KMJ_0JQ"  role="button" data-mdb-ripple-color="dark" target="_blank">
                      Cobertura Amplia 
                    </a>

                </div>
              </div>
              
            </div>

          </form>
        </div>
      </div>
      <div class="career-atn">
        <div class="career bg-r">
          <div class="card-body">
          <h3>Unete a nuestro equipo de ventas!</h3>
          <form action="">
          <label class="form-label" for="customFile">Adjunta tu CV.</label>
          <input type="file" class="form-control form-control-sm" id="formFileSm" />
          <button style="margin-top: 1rem;"  type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
        </div>
        <div class="atn bg-r">
          

        <div class="card-body servs">
          <router-link exact-active-class="active" to="/servicios" class="serv">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
          <h3>SERVICIOS ATENDIDOS</h3>

              <div class="carousel-item active">
                <img src="~../images/foto1.jpg" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/foto2.jpg" class="w-100" alt="#" />
              </div>
              <div class="carousel-item">
                <img src="~../images/foto3.jpg" class="w-100" alt="#" />
              </div>
              
            </div>
          </div>
          </router-link>
        </div>



        </div>


      </div>
    </div>
  </div>

  <br />
  <div class="row py-md-5 m-0 bg-r">
    <div class="col-12 col-md-6 ps-md-5 py-1 order-2 order-md-1 altx">
      <br>
      <h2>Cobertura Amplia</h2>
            
      <ul class="text-start">
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Todo lo señalado en la cobertura Daños a Terceros.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Robo o Perdida de su Vehículo.
        </li>
        <li class="my-4">
            <font-awesome-icon icon="circle-check"  />
            &nbsp;Daños Materiales.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Gastos Médicos a Ocupantes  Vehículo.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;2 Servicios de Grua.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Daños a los Cristales.
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-6 pe-md-5 my-autoorder-1 order-md-2">
        <br>
      <img
        src="~../images/cobertura_amplia.jpg"
        alt="carro"
        class="m-auto img-fluid my-md-4"
      />
    </div>
  </div>
  <br />
  <div class="row py-md-5 m-0 bg-r">
    <div class="col-12 col-md-6 ps-md-5 py-1 order-2 order-md-1 altx">
      <br>
      <h2>Cobertura Daños a Terceros</h2>
      
      <ul class="text-start">
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Daños a Terceros.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Lesiones y daños.
        </li>
        <li class="my-4">
            <font-awesome-icon icon="circle-check"  />
            &nbsp;Pago de Fianza SIN Limite.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;El tramite de inmediato de amparo para evitar que usted sea detenido.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Los tramites administrativos y judiciales para la devolución de su vehículo.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Si usted es culpable pagamos los daños ocasionados a terceros.
        </li>
        <li class="my-4">
          <font-awesome-icon icon="circle-check"  />
          &nbsp;Si usted es afectado reclamamos reparación de los daños de su vehículo.
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-6 pe-md-5 my-autoorder-1 order-md-2">
        <br>
      <img
        src="~../images/cobertura_da_ter.jpg"
        alt="carro"
        class="m-auto img-fluid my-md-4"
      />
    </div>
  </div>

  <br />
</template>
