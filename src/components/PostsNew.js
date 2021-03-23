import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'

function PostsNew (props) {

    function renderError ({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    function renderInput ({ input, label, meta, placeholder }){
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>

                <input {...input} placeholder={placeholder} />

                {renderError(meta)}
            </div>
        )
    }


    return (
        <div>
            <h2>PostsNew</h2>

            <Form onSubmit={(values) => props.createPost(values)} validate={(values) => validate(values)}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="ui form error">    
                     <Field name="title" component={renderInput} label="Title For Post" placeholder={"Enter Post Title"} />
                     <Field name="categories" component={renderInput} label="Categories" placeholder={"Enter Post Tags"} />
                     <Field name="content" component={renderInput} label="Post Content" placeholder={"Enter Post Content"} />
                     <button className="ui button primary">Submit</button>
                     <Link style={{ marginLeft: '10px' }}to="/" className="ui button negative">Cancel</Link>
                </form>
                )}
            </Form>
        </div>
    )
}

const validate = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title for your post';
    }

    if (!values.categories) {
        errors.categories = 'Please enter a post category';
    }

    if (!values.content) {
        errors.content = 'Please enter content info for post';
    }

    return errors;
}

export default connect(null, { createPost })(PostsNew)