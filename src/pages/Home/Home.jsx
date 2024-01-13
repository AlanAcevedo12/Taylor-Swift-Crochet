import { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home() {
    const [progress, setProgress] = useState(localStorage.getItem("percentage"));
    const [color, setColor] = useState(localStorage.getItem("color") || "#81dba1");
    const [selected, setSelected] = useState(localStorage.getItem("selected") || "color1");
    const [audio, setAudio] = useState(new Audio(require("../../assets/Taylor Swift.mp3")))

    function colorChange(color) {
        setColor(color);
        localStorage.setItem("color", color);
    }

    function setColorSelected(s) {
        document.getElementById(selected).style.flex = 1;
        setSelected(s);
        localStorage.setItem("selected", s);
        document.getElementById(s).style.flex = 2;

        if (s === "color6" || s === "color10")
            document.getElementsByTagName("body")[0].style.color = "white";
        else
            document.getElementsByTagName("body")[0].style.color = "black";

        //---- Audio ---
        let era = "";
        switch (s) {
            case "color1": era = "Taylor Swift"; break;
            case "color2": era = "Fearless"; break;
            case "color3": era = "Speak Now"; break;
            case "color4": era = "Red"; break;
            case "color5": era = "1989"; break;
            case "color6": era = "Reputation"; break;
            case "color7": era = "Lover"; break;
            case "color8": era = "Folklore"; break;
            case "color9": era = "Evermore"; break;
            case "color10": era = "Midnights"; break;
        }
        audio.src = require("../../assets/" + era + ".mp3");
        audio.play();
    }

    useEffect(() => {
        document.getElementById(selected).style.flex = 2;
        document.getElementsByClassName("home")[0].style.backgroundColor = color;
    }, [color])

    function onChangeHandler(e) {
        if (e.target.value > 197) return;

        setProgress(e.target.value)
        localStorage.setItem("percentage", e.target.value);
    }

    function calculatePercentage(progress) {
        return progress * 100 / 197;
    }

    return (
        <div id={styles.home} className="home">
            <div id={styles.background}>
                <div className={styles.column} style={{ backgroundColor: "#81dba1" }} id="color1">
                    <button className={styles.button} onClick={() => {
                        colorChange("#81dba1");
                        setColorSelected("color1")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#faf397" }} id="color2">
                    <button className={styles.button} onClick={() => {
                        colorChange("#faf397");
                        setColorSelected("color2")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#de87f1" }} id="color3">
                    <button className={styles.button} onClick={() => {
                        colorChange("#de87f1");
                        setColorSelected("color3")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#b53149" }} id="color4">
                    <button className={styles.button} onClick={() => {
                        colorChange("#b53149");
                        setColorSelected("color4")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#a8eefc" }} id="color5">
                    <button className={styles.button} onClick={() => {
                        colorChange("#a8eefc");
                        setColorSelected("color5")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#221f1f" }} id="color6">
                    <button className={styles.button} onClick={() => {
                        colorChange("#221f1f");
                        setColorSelected("color6")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#fc92de" }} id="color7">
                    <button className={styles.button} onClick={() => {
                        colorChange("#fc92de");
                        setColorSelected("color7")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#d0d0d0" }} id="color8">
                    <button className={styles.button} onClick={() => {
                        colorChange("#d0d0d0");
                        setColorSelected("color8")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#967b5c" }} id="color9">
                    <button className={styles.button} onClick={() => {
                        colorChange("#967b5c");
                        setColorSelected("color9")
                    }}></button>
                </div>
                <div className={styles.column} style={{ backgroundColor: "#312c79" }} id="color10">
                    <button className={styles.button} onClick={() => {
                        colorChange("#312c79");
                        setColorSelected("color10")
                    }}></button>
                </div>
            </div>
            <div id={styles.titleContainer}>
                <h1>TAYLOR SWIFT</h1>
                <h2>THE ERAS TOUR</h2>
                <h5>-CROCHET PATTERN-</h5>
            </div>
            <div id={styles.mainPageContainer}>
                <div id={styles.format}>
                    <h3>
                        Progress
                    </h3>
                    <h4>
                        Completed Rows
                    </h4>
                    <input type="number" min={0} max={197} onChange={onChangeHandler} value={progress} defaultValue={0}>
                    </input>
                    <h3>
                        Total
                    </h3>
                    <h4>
                        {progress} / 197
                    </h4>
                    <h4>{calculatePercentage(progress).toFixed(1)}% </h4>
                    <h4>
                        {progress * 122} Stitches
                    </h4>
                </div>
                <div id={styles.imageContainer}>
                    <img id={styles.image} src={require("../../assets/Pattern.jpg")} />
                    <div id={styles.hideContainer}>
                        <div id={styles.hideImage} style={{ height: (100 - calculatePercentage(progress)) + "%" }} className="hideImage"></div>
                        <div id={styles.rangeContainer} className="rangeContainer" style={{ width: "100%" }}>
                            <input className="range" id={styles.range} type="range"
                                min={0} max={197} value={progress} defaultValue={progress}
                                onChange={onChangeHandler} ></input>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /><br />
            <div id={styles.titleContainer}>
                <h2>FULL SIZE PATTERN</h2>
            </div>
            <div id={styles.bigImageContainer}>
                <div id={styles.hideBigImageContainer}>
                    <div id={styles.hideBigImage} style={{ height: (100 - calculatePercentage(progress)) + "%" }}></div>
                </div>
                <img id={styles.bigImage} src={require("../../assets/Pattern.jpg")} />
            </div>
        </div>

    );
}

export default Home;