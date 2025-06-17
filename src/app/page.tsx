
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tus ventas con nuestra web rápida y soporte 24/7, sin complicaciones." cta1="Digitaliza Ahora" />
<How step1Title="Contáctanos" step1Desc="Explícanos tus necesidades de venta online." step2Title="Creamos tu Web" step2Desc="Diseñamos tu sitio en menos de 24 horas." step3Title="Soporte 24/7" step3Desc="Asistencia continua para maximizar tus ventas." />
<Aboutus headline="WebGo: Tu Socio Digital en Santiago" subheadline="Digitaliza tus ventas fácilmente y sin complicaciones con WebGo, expertos en simplificar tu negocio." beneficiotitulo1="Gestión Simplificada" beneficio1="Nos encargamos de todo por ti." beneficiotitulo2="Ventas Aumentadas" beneficio2="Multiplica tus clientes online hoy." />
<Services heading="Transforma Recomendaciones en Ventas Online" description="Asdad simplifica la digitalización de ventas para dueños de negocios ocupados." services={[{"name":"Desarrollo Web Rápido","icon":"bolt","description":"Tu web lista en 24 horas."},{"name":"SEO Optimizado","icon":"search","description":"Atrae más clientes con WebGo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras online."},{"name":"Gestión de Contenido","icon":"pencil","description":"Mantén tu sitio siempre actualizado."},{"name":"Análisis de Datos","icon":"chart-line","description":"Conoce el comportamiento de tus clientes."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en diseños web que capturan y convierten." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo convierte tus recomendaciones en ventas online, creando una tienda virtual fácil de usar que atraerá a nuevos clientes y aumentará tus ingresos."},{"pregunta":"¿Qué beneficios ofrece el servicio asdad de WebGo para mi pequeño negocio?","respuesta":"El servicio asdad de WebGo, a un precio accesible de 123, te ofrece una plataforma digital que facilita la gestión de ventas, ahorrándote tiempo y esfuerzo."},{"pregunta":"¿Cómo puedo generar ventas online si no tengo tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo, desde la creación hasta la gestión de tu sitio web, permitiéndote concentrarte en otras áreas de tu negocio mientras nosotros impulsamos tus ventas online."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de digitalización?","respuesta":"WebGo se especializa en pequeñas empresas como la tuya, ofreciendo soluciones personalizadas que se adaptan a tus necesidades específicas de ventas online."},{"pregunta":"¿Puedo confiar en que un sitio web aumentará mis ventas?","respuesta":"Sí, un sitio web diseñado por WebGo amplía tu alcance y atrae a clientes nuevos, transformando tus recomendaciones en un flujo constante de ventas online."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Línea" 
                      description="Descubre cómo WebGo puede ayudarte a digitalizar tus ventas sin complicaciones, atrayendo clientes más allá de las recomendaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
