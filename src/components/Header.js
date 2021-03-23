import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {

    return (
        <div style={{borderRadius: '0'}} className="ui grey inverted pointing top segment menu">
            <div className="ui container">
                <Link to="/" className="item"><i class="paper plane icon"></i> The React Blog</Link>

                <div className="right menu">
                    <Link to="/posts/new" className="item">Add a Post</Link>
                </div>
            </div>
        </div>
    )

}