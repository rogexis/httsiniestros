const Home =  ()=> import('./components/Home.vue')
const Services =  ()=> import('./components/Services.vue')
const Contact =  ()=> import('./components/Contact.vue')
const About =  ()=> import('./components/About.vue')



const Mostrar =  ()=> import('./components/blog/Mostrar.vue')
const Crear =  ()=> import('./components/blog/Crear.vue')
const Editar =  ()=> import('./components/blog/Editar.vue')

export const routes = [
    {
        name:'home',
        path: '/',
        component:Home
    },
    {
        name:'services',
        path: '/servicios',
        component:Services
    },
    {
        name:'contact',
        path: '/contacto',
        component:Contact
    },
    {
        name:'about',
        path: '/acerca',
        component:About
    },
    {
        name:'mostrarBlogs',
        path: '/blogs',
        component:Mostrar
    },
    {
        name:'crearBlog',
        path: '/crear',
        component:Crear
    },
    {
        name:'editarBlog',
        path: '/editar/:id',
        component:Editar
    }
]