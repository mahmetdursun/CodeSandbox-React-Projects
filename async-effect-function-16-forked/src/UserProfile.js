import { useEffect, useState } from "react";
import { API } from "./constants";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  const users = async () => {
    const url = `${API}/users/${userId}`;
    const res = await fetch(url);
    const json = await res.json();
    setUser(json);
  };

  useEffect(() => {
    users();
  }, [userId]);

  if (!user) {
    return "Yükleniyor...";
  }

  return (
    <section>
      <dl>
        <dt>İsim</dt>
        <dd>{user.name}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
      </dl>
    </section>
  );
}

export default UserProfile;
