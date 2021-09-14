import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../post";

class Posts extends Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <div>
                {this.props.posts.length ? this.props.posts.map(data => {
                    return (
                        
                        <Post title={data.title} text={data.body}  id={data.id}></Post>
                        
                    )
                }) : ""}
            </div>
        )
    }
}
export default Posts;