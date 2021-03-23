import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../history'
import { fetchPost } from '../actions'

function BreadCrumb (props) {

    useEffect(() => {
        let url = history.location.pathname

        url = url.split('/')

        if (url.length === 3) {
            props.fetchPost(url[2])
        }

    }, [])

    const crumbs = []

    function renderCrumbs() {
        let breadCrumb, url = ''

        url = history.location.pathname

        breadCrumb = url !== '/' ? <Link to={`/`} className="section">Home</Link> : <div class="active section">Home</div>
        
        crumbs.push(breadCrumb)

        url = url.split('/')
 
        url.map((location, index) => {
            
            if (location !== "") {
                if (index <= 2) {
                    crumbs.push(
                        <React.Fragment>
                                <div class="divider"> / </div>
                                <div class={location === 'new' ? 'section active' : 'section'} style={{ textTransform: 'capitalize' }}>{location}</div>
                        </React.Fragment>)
                } else {
                    if (props.post !== null) {
                        crumbs.push(
                            <React.Fragment>
                                    <div class="divider"> / </div>
                                    <div class="section active">{props.post.title}</div>
                            </React.Fragment>)
                    }   
                }
            } 
        }) 

        return crumbs;
    }

    return (
        <div style={{margin: '20px 0'}} class="ui breadcrumb">
            {renderCrumbs()}
        </div>
    )
}

const mapStateToProps = (state) => {
    let url = history.location.pathname
    url = url.split('/')

    return {
        post: state.posts[url[2]]
    }
}

export default connect (mapStateToProps, { fetchPost })(BreadCrumb)