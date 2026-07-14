import React, { useEffect, useState } from "react";


export default function UseWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    function Resize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEffect(() => {
        Resize()

        window.addEventListener("resize", Resize)
        return () =>
            window.removeEventListener("resize", Resize)
    }, [])

    return windowSize;

}
// Is hook ka scenario yeh hai ki aap responsive UI banana chahte hain. Misaal ke taur par, ek sidebar desktop par hamesha nazar aati hai, lekin mobile par hide ho jati hai. Is ke liye component ko har waqt current window size pata hona chahiye.

// Sochne ka tareeqa:

// Hamein screen ka initial size chahiye, isliye state banate hain.
// User browser ko resize kar sakta hai, isliye resize event ko listen karte hain.
// Jab bhi resize ho, state update kar dete hain taake component dobara render ho aur nayi width/height ke mutabiq UI badal sake.
// Component hatne par listener hata dete hain taake memory leak na ho.

// Yani bunyadi soch yeh hai: “Kis cheez ki value waqt ke saath badal sakti hai aur mujhe uski har tabdeeli par UI update karni hai?” Agar jawab window size ho, to aisa custom hook bilkul fit baithta hai.