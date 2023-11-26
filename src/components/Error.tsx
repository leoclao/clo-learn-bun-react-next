'use client'

import React, { useEffect } from "react";

interface Props {
  error: Error & { digest?: string};
  reset: () => void;
}

const CompsError:React.FC<Props> = ({
  error,
  reset
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset();
        }
      >
        Try again
      </button>
    </div>
  );
}

export default CompsError;
