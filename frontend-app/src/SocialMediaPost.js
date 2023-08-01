import React, { useState } from "react";
import axios from "axios";

const SocialMediaPost = () => {
  const [platform, setPlatform] = useState("");
  const [postContent, setPostContent] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");

  const handleGenerate = () => {
    axios.post("http://localhost:8000/generate_social_media_post/", {
      platform: platform,
      post_content: postContent,
    })
      .then(response => {
        setGeneratedPost(response.data.post);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Social Media Post</h2>
      <div>
        <label>Platform:</label>
        <input type="text" value={platform} onChange={e => setPlatform(e.target.value)} />
      </div>
      <div>
        <label>Post Content:</label>
        <textarea value={postContent} onChange={e => setPostContent(e.target.value)} />
      </div>
      <button onClick={handleGenerate}>Generate</button>
      <div>
        <h3>Generated Post:</h3>
        <p>{generatedPost}</p>
      </div>
    </div>
  );
};

export default SocialMediaPost;
