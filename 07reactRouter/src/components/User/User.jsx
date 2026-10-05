import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-amber-200 text-3xl p-4 text-3xl">User ID: {userid}</div>
  );
};

export default User;
