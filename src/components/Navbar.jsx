import { Link } from "react-router-dom";

export const Navbar = () => {

	// Esta función busca la sección y se desplaza suavemente
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Ajuste para que el Navbar fijo no tape el título
            const yOffset = -80; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


	
	return (
		<nav className="nav-difuminado navbar navbar-expand-lg fixed-top mx-5" style={{ backgroundColor: "#003366" }}>
			<div className="container d-flex ">
				<span className="navbar-brand mb-0 h1 fs-5 fst-italic text-light text-wrap">Ing. Julián Andrés Ramírez R.</span>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarMenu"
					aria-controls="navbarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarMenu">
					<div className="ms-auto">
						<ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link 
                        className="nav-link text-light" 
                        to="/" 
                        onClick={() => scrollToSection('perfil')}
                    >
                        Perfil
                    </Link>
                </li>

                <li className="nav-item">
                    <Link 
                        className="nav-link text-light" 
                        to="/" 
                        onClick={() => scrollToSection('educacion')}
                    >
                        Educación
                    </Link>
                </li>

                <li className="nav-item">
                    <Link 
                        className="nav-link text-light" 
                        to="/" 
                        onClick={() => scrollToSection('habilidades')}
                    >
                        Habilidades
                    </Link>
                </li>

				<li className="nav-item">
                    <Link 
                        className="nav-link text-light" 
                        to="/" 
                        onClick={() => scrollToSection('experiencia')}
                    >
                        Experiencia
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-light" to="/blog">Blog</Link>
                </li>

            </ul>
					</div>
				</div>
			</div>
		</nav>
	);
};