<template>
  <main>
    <div class="wa-float">
      <a
        class="btn-link btn-floating btn-lg text-white m-1"
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D523310899624%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR026Z6h52OzrnLoWiIlNrzUVLGddt8EE0lNgXxykiclIDwV-Io-eE0IPcU&h=AT2je-pmkwHeJkucBplfNGTAXYYxEgbWR8tLThlNHhkaPG-PPQY-NCSFeg2u3DrFcDVW808RLpHLxcbfmU28sBaJ7a2NkI_eDWnxrQC4FfVGeOpcNoy_vUB8DakPqi6tW0VqCDy07OkoUOi-KrwL8mrZTr9KMJ_0JQ"
        role="button"
        data-mdb-ripple-color="dark"
        target="_blank"
      >
        <img src="../images/whatsapp-logo.png" alt="" width="55" height="55"
      /></a>
    </div>

    <nav class="navbar navbar-expand-lg nav-color navbar-dark fixed-top">
      <div class="container-fluid navbar-margin">
        <a class="navbar-brand" href="#">
          <img src="~../images/LOGO_HTT.webp" alt="" width="70" height="24" />
          HTT Siniestros
        </a>

        <div class="emergency">
          <span>Tel. de Emergencias</span>
          <a href="tel:33-2055-3604"> 3320553604 </a>
          <span> ó </span>
          <a href="tel:33-3028-0091"> 3330280091 </a>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </main>

  <footer class="text-center text-white align-text-bottom footer-up">
    <!-- Grid container -->
    <br>
  <div class="row  m-0 bg-r footer-color">
    <div class="col-12  my-autoorder-1 order-md-2">
            <div class="card footer-color">
                <div class="card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.073238888214!2d-103.40759008460033!3d20.747825402684235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af08534e9e7b%3A0xb28dd115371f417e!2sHTT%20Siniestros!5e0!3m2!1ses-419!2smx!4v1651632447885!5m2!1ses-419!2smx" width="100%" height="400px" style="border-radius:.25rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <section class="">
                <!-- Facebook -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="https://www.facebook.com/HTT-Siniestros-102102932234223"
                  target="_blank"
                  role="button"
                  data-mdb-ripple-color="white"
                  ><i class="fab bi-facebook"></i
                ></a>

                <!-- Twitter -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                  ><i class="fab bi-twitter"></i
                ></a>

                <!-- Google -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                  ><i class="fab bi-youtube"></i
                ></a>

                <!-- Instagram -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                  ><i class="fab bi-instagram"></i
                ></a>

                <!-- Linkedin -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                  ><i class="fab bi-linkedin"></i
                ></a>
                <!-- Github -->
                <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D523310899624%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR026Z6h52OzrnLoWiIlNrzUVLGddt8EE0lNgXxykiclIDwV-Io-eE0IPcU&h=AT2je-pmkwHeJkucBplfNGTAXYYxEgbWR8tLThlNHhkaPG-PPQY-NCSFeg2u3DrFcDVW808RLpHLxcbfmU28sBaJ7a2NkI_eDWnxrQC4FfVGeOpcNoy_vUB8DakPqi6tW0VqCDy07OkoUOi-KrwL8mrZTr9KMJ_0JQ"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                  ><i class="fab bi-whatsapp"></i
                ></a>
                
              </section>
              <router-link onclick="scrollToTop()"  exact-active-class="active" to="/contacto" class="btn btn-primary">Quejas y Sugerencias</router-link>

</div>
</div>

    </div>
  </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center text-white p-3 footer-down">
      © 2023 HTT Siniestros:
      <a class="text-white" href="https://httsiniestros.com/" 
        >www.httsiniestos.com</a
      >
    </div>
    <!-- Copyright -->
  </footer>
</template>