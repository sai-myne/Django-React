import React from "react";
import { apiTweetCreate} from "./lookup";

export function TweetCreate(props){
  const textAreaRef = React.createRef();
  const {didTweet} = props
  const handleBakcendUpdate = (response, status) => {
    if (status === 201) {
      didTweet(response);
    } else {
      alert("An error occured, please try again");
    }
  };
  const hanldeSubmit = (event) => {
    // backend api request
    event.preventDefault();
    const newVal = textAreaRef.current.value;
    apiTweetCreate(newVal, handleBakcendUpdate);
    textAreaRef.current.value = "";
  };
  return <div className={props.className}>
    <form onSubmit={hanldeSubmit}>
      <textarea
        ref={textAreaRef}
        required={true}
        className="form-control"
        name="tweet"
      ></textarea>
      <button type="submit" className="btn btn-primary my-3">
        Tweet
      </button>
    </form>
  </div>
  
}





