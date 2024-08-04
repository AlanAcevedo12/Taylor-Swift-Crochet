import { useState } from "react";
import styles from "./Landing.module.css";
import { useNavigate } from 'react-router-dom';

export default function Test() {
    const navigate = useNavigate();
    const [press, setPress] = useState(false);

    return (
        <div id={styles.main}>
            <div id={styles.background} >
                <div id={!press ? styles.sobre : styles.sobrePress} onClick={() => setPress(!press)}>
                    {/* <h1>Landing</h1> */}
                </div>
            </div>
        </div>
    )
}