import React, { useState } from "react";
import { TweetsList } from './list'
import {TweetCreate} from './create'

export function TweetsComponent(props) {
  const [newTweets, setNewTweet] = useState([]);

  const canTweet = props.canTweet === "false" ? false : true
  const handleNewTweet = (newTweet) => {
    // backend api response handler
    let tempNewTweets = [...newTweets];
    tempNewTweets.unshift(newTweet);
    setNewTweet(tempNewTweets);
    
  };
  return (
    <div className={props.className}>
      <div className="col-12 mb-3">
        {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
      </div>
      <TweetsList newTweets={newTweets} {...props} />
    </div>
  );
}





