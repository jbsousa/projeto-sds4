import 'assets/css/styles_footer.css';
import GitHubIcon from 'assets/img/icons/github.svg';
import InstagramIcon from 'assets/img/icons/instagram.svg';
import LinkedInIcon from 'assets/img/icons/linkedin.svg';

const Footer = () => {
    return (

        <>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="footer-icons">
                    <p className="text-light">App desenvolvido por:
                        <strong> João Barbosa</strong>
                    </p>
                    <a href="https://github.com/jbsousa" target="_new" rel="noreferrer">
                        <img src={GitHubIcon} alt="GitHub" width="30" />
                    </a>

                    <a href="https://www.linkedin.com/in/jo%C3%A3o-barbosa-sousa" target="_new" rel="noferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" width="30" />
                    </a>

                    <a href="https://www.instagram.com/jb_ssousa/?hl=pt-br" target="_new" rel="noferrer">
                        <img src={InstagramIcon} alt="Instagram" width="30" />
                    </a>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer>
        </>

    );
}

export default Footer;