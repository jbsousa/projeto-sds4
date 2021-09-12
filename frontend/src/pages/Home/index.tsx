import Footer from "components/Footer"
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";
import {
    SiJava, SiTypescript, SiSpring,
    SiPostgresql, SiBootstrap, SiNetlify,
    SiPostman
} from "react-icons/si";
import { GrReactjs, GrHeroku } from "react-icons/gr";

const Home = () => {

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <Link className="btn btn-primary btn-sm" to="/dashboard">
                        Acessar Dashboard
                    </Link>
                    <hr />
                    <p className="text-justify">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um backend construído com Spring Boot. Principais tecnologias utilizadas: </p>
                </div>
            </div>
            <div className="container card-group py-3 text-center">
                <div className="card col-sm-2 m-1">
                    <SiSpring className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">Spring Boot</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <SiJava className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">Java</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <GrReactjs className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">React</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <SiTypescript className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">TypeScript</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <SiBootstrap className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <SiPostgresql className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">PostgreSQL</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <SiNetlify className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">Netlify</h5>
                    </div>
                </div>
                <div className="card col-sm-2 m-1">
                    <GrHeroku className="card-img-top py-2" size="75" />
                    <div className="card-body">
                        <h5 className="card-title">Heroku</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Home;