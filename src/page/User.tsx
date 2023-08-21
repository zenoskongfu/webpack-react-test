import { useEffect, useState } from "react"

const User = () => {
  // fetch /fetch/getUser in useEffect
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    fetch('/fetch/getUser').then(res => res.json()).then(data => {
      setUser(data)
    })
  }, []);
  // then display it in Page1 by h1 tag
  return user ? <div><h1>{user.name}</h1></div> : <h1>fetch failed</h1>;
}

export default User;