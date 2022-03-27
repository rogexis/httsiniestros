<template>
<main>

    <nav class="navbar navbar-expand-lg nav-color navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="~../images/LOGO_HTT.webp" alt="" width="60" height="24">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/servicios" class="nav-link">SERVICIOS ATENDIDOS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/contacto" class="nav-link">AYUDA Y CONTACTO</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/acerca" class="nav-link">ACERCA DE HTT</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <router-view></router-view>
    </div>
</main>
<footer class="text-center text-white, align-text-bottom" style="background-color: #f1f1f1;">
    <!-- Grid container -->
    <div class="container pt-4">
        <!-- Section: Social media -->
        <section class="mb-4">
            <!-- Facebook -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i></a>

            <!-- Twitter -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i></a>

            <!-- Google -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-youtube"></i></a>

            <!-- Instagram -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>

            <!-- Linkedin -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-linkedin"></i></a>
            <!-- Github -->
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-whatsapp"></i></a>
        </section>
        <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 HTT Seguros:
        <a class="text-dark" href="https://httseguros.com/">www.httseguros.com</a>
    </div>
    <!-- Copyright -->
</footer>
</template>
