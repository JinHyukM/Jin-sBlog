

import React from 'react'
import "./post.css";
import {Posts} from "../../projectData";
import Description from '../description/Description';

export default function Post() {
    return (
        <div className="postContainer">
                {Posts.map((p) => (
                    <Description
                        key={p.id}
                        post={p}
                    />
                ))}
        </div>
    )
}
