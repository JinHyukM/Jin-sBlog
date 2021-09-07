

import React from 'react'
import Topbar from '../topbar/Topbar'
import { useEffect, useRef } from "react";
import "./description.css"
import { Posts } from '../../projectData';

export default function Description({post}) {


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

    const fadeInBox = FadeIn(3, 0.5);
    const fadeInDes = FadeIn(3,1);
    const fadeInImg = FadeIn(3,1.5);

    return (
        <> 
        <div className="descriptionContainer" {...fadeInBox}>
            <div className="descriptionWrapper">
                <div className="descriptionTop" >
                    <p className="projectInfo" {...fadeInDes}>
                        {post.info}
                    </p>
                </div>
                <div className="descriptionBottom" > 
                <div id={post.carouselExampleControls} class="carousel slide" data-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className="d-block w-100 desImg" src={post.photo[0]} alt="image1" {...fadeInImg}/>
                        </div>
                        <div class="carousel-item">
                            <img className="d-block w-100 desImg" src={post.photo[1]} alt="image2" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href={post.href} role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href={post.href} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </>        
    )
}
