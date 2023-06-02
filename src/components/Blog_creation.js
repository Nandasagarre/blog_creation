import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './blog.css'
const BlogCreationPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    //validations
    if (!title || !description || !content) {
      alert('Please fill in all fields');
      return;
    }
    //TODO extract the usr data and call API to submit the blog data from user


    // Reset the form
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <div className="blog-creation-page">
      <h1>Create a New Blog</h1>
      <hr />
      <div className="form-group">
        <label>Title<span style={{"color":'red'}}>*</span></label> <br/>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description<span style={{"color":'red'}}>*</span></label> <br/>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Content<span style={{"color":'red'}}>*</span></label>
        <ReactQuill value={content} onChange={setContent} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BlogCreationPage;
