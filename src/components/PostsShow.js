import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'

function PostsShow (props) {

    const { post } = props

    useEffect(() => {
        if (!post) {
            props.fetchPost(props.match.params.id)
        }
        
    }, [])

    if (!post) {
        return (
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>

                <p></p>
            </div>
        )
    }
        
    return (
        <div class="ui equal width grid">
            <div class="row">
                <div className="column">
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>

                <div className="column">
                    <button className="ui button negative" onClick={() => props.deletePost(post.id)}>Delete Post</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)