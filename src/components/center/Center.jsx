
import React from 'react'
import { useEffect, useRef } from "react";
import "./center.css"

export default function Center() {
    

    const FadeIn = (duration = 0, delay = 0) => {
        const element = useRef();
        useEffect(() => {
            if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ${delay}s`;
            current.style.opacity = 1;
            }
        }, []);
        return { ref: element, style: { opacity: 0 } };
    };

    const fadeInObjective = FadeIn(3, 0.5);
    const fadeInEducation = FadeIn(3,1);
    const fadeInDate = FadeIn(3,1);

    return (
        <>
        <div className="centerTop">
            <div className="centerTopWrapper">
                <p className="objective" {...fadeInObjective} >Intellectually curios individual with a passion for learning new technologies and a strong interest in software development and database management. Seeking a Software internship position coming with basic knowledge of software programs and database structure.</p>
                <p className="education" {...fadeInEducation}>B.S Computer Science, May 2023(expected graduation date)</p>
                <p className="education" {...fadeInDate}>San Jose State University, San Jose, CA</p> 
            </div>
        </div>
        <div className="centerBottom">
            <footer className="email">jinhyuk.moon@sjsu.edu</footer>
        </div>
        </>
    )
}
