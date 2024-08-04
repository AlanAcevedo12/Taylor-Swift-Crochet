import { useNavigate } from "react-router-dom";
import StarParticles from "../StarParticles/StarParticles";
import styles from "./Detalles1.module.css";

export default function Detalles1() {
    const navigate = useNavigate();
    return (
        <div id={styles.main}>
            <div id={styles.background} >
                <StarParticles />
                <div id={styles.carta} onClick={() => navigate("/carta")}>
                    <img id={styles.imagencarta} src={require("../../assets/meme.jpg")} />
                </div>
            </div>
        </div>
    )
}