import React, { useState } from 'react';

import { firestoreMutationHook } from "../lib/firestoreHook";

export const MessageForm = () => {
  const { postDocument } = firestoreMutationHook("messages");
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const submit = () => {
    postDocument({ content, username });

    setContent('');
    setUsername('');
  }

  return (
    <div className="form">
          <textarea value={content} onChange={(evt) => setContent(evt.target.value)}></textarea>
          <input value={username} onChange={(evt) => setUsername(evt.target.value)} type="text" />
          <a onClick={submit}>Post</a>
    </div>
  )
}
