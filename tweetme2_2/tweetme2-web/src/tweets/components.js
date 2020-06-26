import React, { useEffect, useState } from "react";
import { TweetsList } from './list'
import {TweetCreate} from './create'
import {apiTweetDetail} from './lookup'
import {Tweet} from './detail'

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

export function TweetDetailComponent(props){
  const {tweetId} = props
  const [didLookup, setDidLookup] = useState(false)
  const [tweet, setTweet] = useState(null)
  const handleBackendLookup = (response, status) => {
    if (status === 200){
      setTweet(response)
    } else {
      alert("There was an error finding your tweet.")
    }
  } 
  useEffect(()=>{
    if(didLookup === false){
      apiTweetDetail(tweetId, handleBackendLookup)
      setDidLookup(true)
    }
  }, [tweetId, didLookup, setDidLookup])
  return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}





