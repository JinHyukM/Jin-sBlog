
import React from 'react'
import Center from '../../components/center/Center'
import Post from '../../components/post/Post'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Center />
            </div>
        </>
    )
}
