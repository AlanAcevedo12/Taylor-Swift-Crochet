import { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import { useNavigate } from 'react-router-dom';
import StarParticles from "../StarParticles/StarParticles";

export default function Landing() {
    const navigate = useNavigate();
    const [press, setPress] = useState(false);

    function timeout() {
        setPress(true)
        setTimeout(() => { navigate("/carta"); setPress(false) }, 1000)
    }

    return (
        <div id={styles.main}>
            <div id={styles.background} >
                <StarParticles />
                <div id={press ? styles.sobreAbierto : styles.sobre} onClick={() => timeout()}>
                    {/* <h1>Landing</h1> */}
                    {
                        press &&
                        <div id={styles.solapa}>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}