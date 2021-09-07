


import React from 'react'
import Post from '../../components/post/Post'
import Topbar from '../../components/topbar/Topbar'
import "./experience.css"
import BusinessIcon from '@material-ui/icons/Business';
import {useRef, useEffect} from "react";

export default function Experience() {

    const FadeIn = (duration = 0, delay = 0) => {
        const element = useRef();
        useEffect(() => {
            if(element.current){
                const {current} = element;
                current.style.transition = `opacity ${duration}s ${delay}s`;
                current.style.opacity = 1;
            }
        },[]);
        
        return {ref:element, style: {opacity:0}};
    }

    const FadeImg = FadeIn(3,0.5);
    const FadeDesT = FadeIn(3,1);
    const FadeDesB = FadeIn(3,1);

    return (
        <>
            <Topbar />
            <div className="experienceTop">
                <div className="experienceWrapper">
                    <div className="experienceLeft">
                        <img src="/images/TechForGood_Logo.png" alt="" className="techImg" {...FadeImg}/>
                    </div>
                    <div className="experienceRight">
                        <p className="description" {...FadeDesT}>
                        Tech For Good Inc is a 501(c)(3) nonprofit organization that strives to provide technology solutions to underrepresented communities. From educational courses to live-saving weapon defense systems, we hope to use technology to impact every life for the better.
                        </p>
                        <p className="description" {...FadeDesB}>
                        This past Summer, I was a full stack intern at Tech For Good Inc. I have worked on building an interactive online class website that is between elementary teachers and students. The purpose of this project is to make teachers able to set up the education lab for elementary students. During the internship, one of my tasks was building a webpage that displays a video and components for the video using react. Having never built web pages like this, I had to learn by reading online resources. I had to spend all day learning and building the webpage and in two days, I successfully implemented the functionality. I really enjoyed working on this project and I believe those experiences would help me become better at problem solving.
                        </p>
                    </div>
                </div>
            </div>
            <div className="experienceBottom">
                    <BusinessIcon />
                    <span className="site"><b>Company Website:</b> </span>
                    <a href="https://techforgoodinc.org/" className="address" >https://techforgoodinc.org/</a>
            </div>
        </>
    )
}
