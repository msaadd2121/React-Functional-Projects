import React, { useState,useRef } from "react";
import useOutsideClick from ".";


export default function UseOnclickOutsideTest() {
    const [showContent, setShowcontent] = useState(false)
    const ref = useRef();
    useOutsideClick(ref, () => setShowcontent(false))

    return (
        <div>
            {showContent ? (
                <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>
                        Please click outside of this to close this. It won't close if you
                        click inside of this content
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowcontent(true)}>Show Content</button>
            )}
        </div>
    );
}