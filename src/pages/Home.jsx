import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import julianRamirez from "../assets/img/julian-ramirez.png";
import logoUtel from "../assets/img/logo-universidad-utel1.jpeg"
import logoUpb from "../assets/img/upb-logo.png"
import logoEsumer from "../assets/img/logo-esumer.jpeg"
import logoUnal from "../assets/img/unal-logo.jpg"
import logoHtml from "../assets/img/logo-html-color.png"
import logoJavaScript from "../assets/img/logo-js-color.png"
import logoMySQL from "../assets/img/logo-mysql-color.png"
import logoPython from "../assets/img/logo-python-color.png"
import logoReact from "../assets/img/logo-react.png"
import logoFlask from "../assets/img/logo-flask.png"
import logoPostman from "../assets/img/logo-postman-color.png"
import logoMatlab from "../assets/img/logo-matlab-color.png"
import logoCss from "../assets/img/logo-css-color.png"
import logoBootstrap from "../assets/img/logo-bootstrap-color.png"
import logoDjango from "../assets/img/logo-django-color.png"
import logoSQLite from "../assets/img/logo-SQlite-color.png"
import logoGithub from "../assets/img/logo-git-color.png"
import geeks from "../assets/img/full-stack-4geeks.png"
import Scrum from "../assets/img/scrum-master.png"
import ProductOwner from "../assets/img/productowner.png"
import Kanban from "../assets/img/kanban.png"


import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { EstudiosCard } from "../components/EstudiosCard.jsx";
import { HabilidadesCard } from "../components/HabilidadesCard.jsx";
import { CertificacionesCard } from "../components/CertificacionesCard.jsx";
import { Navbar } from "../components/Navbar.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()




	const estudiosFormales = [
		{
			Titulo: "Magister en Ciencias Computacionales",
			Universidad: "Universidad Utel",
			lugar: "Ciudad de Mexico, Mexico",
			ImagenLogo: logoUtel,
			fecha: "Enero de 2023"
		},

		{
			Titulo: "Especialista en Automática",
			Universidad: "Universidad Pontificia Bolivariana",
			lugar: "Medellín, Colombia",
			ImagenLogo: logoUpb,
			fecha: "Marzo de 2018"
		},

		{
			Titulo: "Especialista en Gerencia de Proyectos",
			Universidad: "Universidad Esumer",
			lugar: "Medellín Colombia",
			ImagenLogo: logoEsumer,
			fecha: "Marzo de 2012"
		},

		{
			Titulo: "Ingeniero Electrónico",
			Universidad: "Universidad Nacional de Colombia",
			lugar: "Manizales, Colombia",
			ImagenLogo: logoUnal,
			fecha: "Agosto de 2005"

		}

	]

	const habilidades = [
		{
			habilidad: "HTML",
			logo: logoHtml,
		},

		{
			habilidad: "JavaScript",
			logo: logoJavaScript,
		},

		{
			habilidad: "MySQL",
			logo: logoMySQL,
		},

		{
			habilidad: "Python",
			logo: logoPython,
		},

		{
			habilidad: "React",
			logo: logoReact,
		},

		{
			habilidad: "Flask",
			logo: logoFlask,
		},

		{
			habilidad: "Postman",
			logo: logoPostman,
		},


		{
			habilidad: "Matlab",
			logo: logoMatlab,
		},

		{
			habilidad: "CSS",
			logo: logoCss,
		},

		{
			habilidad: "Bootstrap",
			logo: logoBootstrap,
		},

		{
			habilidad: "Django",
			logo: logoDjango,
		},

		{
			habilidad: "SQLite",
			logo: logoSQLite,
		},

		{
			habilidad: "Git & GitHub",
			logo: logoGithub,
		},

	]

	const certificaciones = [

		{
			nombreCertificacion: "Desarrollador Full Stack",
			fecha: "Agosto de 2025",
			enteCertificador: "4Geeks Academy",
			logo: geeks
		},


		{
			nombreCertificacion: "Scrum Master Professional Certificate",
			fecha: "2021",
			enteCertificador: "CertiProf",
			logo: Scrum
		},


		{
			nombreCertificacion: "Scrum Product Owner Professional Certificate",
			fecha: "2020",
			enteCertificador: "CertiProf",
			logo: ProductOwner
		},


		{
			nombreCertificacion: "Kanban Essentials Professional Certificate",
			fecha: "2020",
			enteCertificador: "Certiprof",
			logo: Kanban
		}
	]



	return (
		<div>
			<Navbar />
			<div className="text-center mt-5 pt-2">

				{/* Contenedor principal para centrar la fila horizontalmente */}
				<div id="perfil" className="d-flex justify-content-center border border-3 rounded-5 mx-5 border-custom-light-blue">
					{/* Contenedor de la imagen y el texto: usamos d-flex para que estén lado a lado */}
					{/* Usamos 'align-items-center' para alinearlos verticalmente al centro (opcional) */}
					{/* Se usa 'col-lg-8' o un tamaño similar para limitar el ancho del contenido y mantener el centrado */}
					<div className="d-flex flex-column flex-lg-row align-items-center col-12 col-md-10 col-lg-8 p-4">
						{/* Contenedor de la Imagen */}
						<div className="flex-shrink-0 me-4"> {/* flex-shrink-0 previene que se encoja. me-4 es margin-right */}
							<img
								src={julianRamirez}
								className="img-fluid rounded-circle"
								style={{ width: "250px", height: "250px", objectFit: "cover" }} /* Tamaño fijo para la imagen */
								alt="Julian Ramirez"
							/>
						</div>

						<div>
							<div className="fs-4 text-start fw-bold fst-italic">
								Perfil
							</div>
							{/* Contenedor del Texto (Lorem) */}
							<div className="fs-6 font-base lead flex-grow-1 text-justify mt-2 text-start"> <strong> {/* flex-grow-1 hace que ocupe el espacio restante. text-start para que el texto justifique a la izquierda dentro de este div */}
								Ingeniero Electrónico y Magíster en Ciencias Computacionales, poseo una sólida trayectoria
								profesional liderando equipos y gestionando proyectos tecnológicos. Soy Full Stack Developer
								experto en Python, JavaScript, React, Flask y SQL. Mi experiencia en sectores como el aeronáutico y
								el mantenimiento industrial me permite estructurar, optimizar y liderar proyectos creando soluciones escalables y seguras.
								Mi enfoque es aportar valor, conectando las necesidades de negocio con la tecnología a través de arquitecturas eficientes,
								conectando la visión de negocio con la excelencia técnica. </strong>
							</div>
						</div>
					</div>
				</div>

				<div id="educacion" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
					<div className="fs-3 fw-bold mb-3">
						Formación Académica
					</div>

					<div className="d-flex">
						<div className="row g-0 justify-content-center">
							{
								estudiosFormales.map((estudios, index) => {
									return (
										<div className="col-md-5 m-1 p-2">
											<EstudiosCard universidad={estudios.Universidad} titulo={estudios.Titulo} lugar={estudios.lugar} fecha={estudios.fecha} logo={estudios.ImagenLogo} />
										</div>
									)
								})
							}
						</div>
					</div>


				</div>

				<div id="habilidades" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
					<div className="fs-3 fw-bold mb-3">
						Habilidades
					</div>

					<div className="d-flex">
						<div className="row g-0 justify-content-center">
							{
								habilidades.map((habilidades, index) => {
									return (
										<div className="col-12 col-md-3 col-lg-2 m-0 p-0">
											<HabilidadesCard habilidad={habilidades.habilidad} logo={habilidades.logo} />
										</div>
									)

								})
							}
						</div>

					</div>

				</div>



				<div id="Certificaciones" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
					<div id="certificaciones" className="fs-3 fw-bold mb-5 pb-2">
						Certificaciones
					</div>

					<div className="d-flex">
						<div className="row g-2 justify-content-center">
							{
								certificaciones.map((certificado, index) => {
									return (
										<div className="col-12 col-md-3 col-lg-5 m-1">
											<CertificacionesCard entidad={certificado.entidad} titulo={certificado.Titulo} fecha={certificado.fecha} logo={certificado.logo} />
										</div>
									)
								})
							}
						</div>
					</div>
				</div>


				<div id="experiencia" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
					<div id="experiencia" className="fs-3 fw-bold mb-2 pb-2">
						Experiencia laboral
					</div>

					<div className="container py-5">
						{/* La clase 'timeline-area' aplicará el CSS para la línea vertical */}
						<div className="row timeline-area">

							{/*Punto 1: Evento a la Izquierda*/} 
												
							<div className="col-12 col-md-6 timeline-left">
								<div className="timeline-card">
									<h3>Jefe de Operaciones</h3>
									<h5>Estilo Ingenieria</h5>
									<p>Enero 2023 - Actual</p>
									<p className="text-start">
										<ul>
											<li>
												Optimicé procesos operativos gestionando métricas clave como tasa de falla, márgenes de ganancia, OTIF y NPS, aplicando
												análisis de datos para identificar patrones y proponer mejoras basadas en evidencia.
											</li>
											<li>
												Utilicé herramientas CRM como Salesforce y Dynamics para la gestión y seguimiento de clientes y operaciones, mejorando la
												trazabilidad y reduciendo tiempos de respuesta.
											</li>
											<li>
												Lideré equipos multidisciplinarios en la coordinación de proyectos de mantenimiento, aplicando metodologías de gestión ágil para
												garantizar el cumplimiento de plazos y la satisfacción del cliente.
											</li>
										</ul>
									</p>
								</div>
							</div>

							{/* Columna vacía que actúa como separador en móviles */}
							<div className="col-md-6 d-none d-md-block"></div>


							{/* Punto 2: Evento a la Derecha */}
							<div className="col-md-6 d-none d-md-block"></div> {/* Columna vacía */}

							<div className="col-12 col-md-6 timeline-right">
								<div className="timeline-card  text-start">
									<h3>Ingeneiro de Proyectos</h3>
									<h5>Aeronautica Civil de Colombia</h5>
									<p>Septiembre de 2018 - Octubre de 2022</p>
									<p>
										<ul>
											<li>
												Lideré la formulación y estructuración de proyectos de infraestructura y tecnología aeronáutica, aplicando metodologías de
												gestión y análisis de requisitos para garantizar la alineación técnica y operativa con los objetivos estratégicos.
											</li>
											<li>
												Ejecuté evaluaciones técnicas, financieras y de factibilidad, optimizando la priorización de inversiones y fortaleciendo la toma de
												decisiones basadas en datos y métricas de rendimiento.
											</li>
											<li>
												Gestioné la coordinación con múltiples áreas técnicas y administrativas, asegurando la integración de recursos, el cumplimiento de
												cronogramas y la mitigación de riesgos en todas las etapas del ciclo de vida del proyecto.
											</li>
										</ul>
									</p>
								</div>
							</div>

							{/* Repite esta estructura para cada evento (Izquierda/Derecha) */}
							{/*Punto 3: Evento a la Izquierda*/} 
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				        ======================================================= */}
							<div className="col-12 col-md-6 timeline-left">
								<div className="timeline-card">
									<h3>Superintendente Técnico</h3>
									<h5>Otis Elevator Company Colombia SAS</h5>
									<p>Octubre de 2007 - Septiembre de 2018</p>
									<p className="text-start">
										<ul>
											<li>
												Supervisé y coordiné el mantenimiento de equipos críticos, asegurando alta disponibilidad y cumplimiento de estándares técnicos.
											</li>
											<li>
												Optimicé procesos operativos mediante el uso de herramientas tecnológicas, incrementando la eficiencia y el control de tareas.
											</li>
											<li>
												Analicé fallas recurrentes e implementé acciones correctivas que mejoraron la confiabilidad y redujeron incidentes.
											</li>
										</ul>
									</p>
								</div>
							</div>

							{/* Columna vacía que actúa como separador en móviles */}
							<div className="col-md-6 d-none d-md-block"></div>

						</div>
					</div>



				</div>

			</div>
		</div>
	);
}; 