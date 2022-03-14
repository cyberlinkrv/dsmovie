import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';

export default function Navbar() {
    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>Avaliação de Filmes</h1>
                <a href="https://github.com/cyberlinkrv" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">Projeto disponivel no GitHub do desenvolvedor Divino J. Silva</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );

}