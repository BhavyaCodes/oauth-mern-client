import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/api/userinfo");
      setUser(res.data.user);
    };
    getUser();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <img src={user.imageUrl} />
          <h1>{user.name}</h1>
        </div>
      )}
    </div>
  );
}

export default Profile;
