import React, { Component } from "react";
import "./app.css"
class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            postData: [],
            comments: []
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState({postData: data}));
        fetch("https://jsonplaceholder.typicode.com/comments/")
           .then(response => response.json())
           .then(data => {
                 const comments  =  data.filter(item => item.postId == this.state.id)
                 this.setState({comments:comments})
            });
    }
    render(){
        return(
            <div id="info" className="pb-20 flex justify-center items-center">
                <article id="post-details" className="rounded-md mr-5 p-4 flex flex-col justify-center ">
                <h2  class="text-lg font-semibold text-gray-900 -mt-1">{this.state.postData.title}</h2>
                <p class="mt-3 text-gray-700 text-sm text-left" >{this.state.postData.body}</p>
                </article>
                <article id="comments" className="rounded-md p-4">
                    <h2><b>Comments</b></h2>
                    <ul>
                        {this.state.comments.length > 0 ? this.state.comments.map(item => (
                                  <div className="comment">
                                      <p className="body">{item.body}</p>
                                    <h3 className="name">by - {item.name}</h3>    
                                  </div>
                        )) : ""}
                    </ul>
                </article>
            </div>
        )
    }
}
export default Details;