import { useNavigate } from "react-router-dom";
import StarParticles from "../StarParticles/StarParticles";
import styles from "./Carta.module.css";

export default function Carta() {
    const navigate = useNavigate();

    return (
        <div id={styles.main}>
            <div id={styles.background} >
                <StarParticles />
                <div id={styles.carta} onClick={() => navigate("/")}>
                    {/* <img id={styles.imagencarta} src={require("../../assets/cartavacia.jpg")} onClick={() => navigate("/")} /> */}
                    <p id={styles.titulo}>
                        Hogwartz Escuela de Magia y Hechicería<br />
                    </p>
                    <p id={styles.textoDumbledore}>
                        Director: Albus Dumbledore<br />
                        Orden de Merlin Primera Clase,<br />
                        Gran Hechicero, Jefe de Magos,<br />
                        Jefe Supremo, Confederación<br />
                        Internacional de Magos
                    </p>
                    <div id={styles.textoPrincipalContainer}>
                        <p id={styles.textoPrincipal}>
                            Le saludamos cordialmente y nos complace informarle que ha sido seleccionado/a como invitado/a en
                            la celebración del décimo cumpleaños de Lucila Luque.
                        </p>
                        <p id={styles.textoPrincipal}>
                            El evento, que tendrá una temática de Harry Potter, se llevará a cabo el lunes 19 de agosto,
                            de 18:00 a 20:30 horas, en el salón Rapsodia Multieventos.
                        </p>
                        <p id={styles.textoPrincipal}>
                            Nos encantaría que asista disfrazado/a de acuerdo con la temática o llevando alguna
                            prenda u objeto que represente la casa de su preferencia.
                        </p>
                        <p id={styles.textoPrincipal}>
                            Esperamos contar con su presencia en esta ocasión tan mágica.
                        </p>
                    </div>
                    <p id={styles.textoCordial}>
                        Atentamente,<br />
                        Minerva McGonagall<br />
                        Directora adjunta<br />
                    </p>
                    <button id={styles.boton} onClick={(e) => { e.stopPropagation(); navigate("/detalles") }}>Detalles</button>
                </div>
            </div>
        </div >
    )
}