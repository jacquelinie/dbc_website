import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <div className="Loading">
        <ClipLoader
          color={"#F37A24"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};
