import React from 'react'

const Create_post = () => {
  return (
    <div>
        <h1>Just a few steps away!</h1>
        <div className="post_form">
            <input type="file" accept='image/*' capture/>
        </div>
    </div>
  )
}

export default Create_post