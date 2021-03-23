import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

function PostsIndex (props) {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    console.log(props.posts)

    function renderPosts () {

        if (props.posts.length === 0){
            return 
        }

        return props.posts.map(post => {
            return (
                <div class="item" key={post.id}>
                    <div class="content">
                        <div class="header"><h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3></div>
                        {post.content}
                    </div>
                </div>
            )
        })
    }

    return (<div>
                <h3>Posts</h3>

                <div class="ui inverted segment">
                    <div class="ui inverted relaxed divided list">
                        {renderPosts()}
                    </div>
                </div>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts)
    }
}

export default connect (mapStateToProps, { fetchPosts })(PostsIndex)