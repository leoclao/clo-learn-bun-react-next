'use client';

import { useState } from 'react';

export default function Auth() {
  const [feedback, setFeedback] = useState("");
  return (
    <>
      <label htmlFor="feedback">Ux Feedback</label>
      <input id="feedback" value={feedback} onChange={(e)=> setFeedback(e.target.value)} />
    </>
  )
}