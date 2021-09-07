

import React from 'react'
import Center from '../../components/center/Center'
import Post from '../../components/post/Post'
import Topbar from '../../components/topbar/Topbar'

export default function Project() {
    return (
        <>
            <Topbar />
            <div className="projectContainer">
                <Post />
            </div>
        </>
    )
}
