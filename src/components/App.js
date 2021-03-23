import React from 'react';
import { Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import BreadCrumb from './Breadcrumb'
import Footer from './Footer'
import PostsIndex from './PostsIndex'
import PostsNew from './PostsNew'
import PostsShow from './PostsShow'
import history from '../history'

export default function App (props) {
    return (
        <div className="pusher">
            <Router history={history}>
                <div>
                    <Header />
                    <div className="ui vertical">
                        <div className="ui container">
                            <BreadCrumb />
                            
                            <Switch>
                                <Route path="/" exact component={PostsIndex} />
                                <Route path="/posts/new" exact component={PostsNew} />
                                <Route path="/posts/:id" exact component={PostsShow} />
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}