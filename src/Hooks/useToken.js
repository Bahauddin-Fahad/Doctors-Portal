import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // console.log(user?.user?.email);
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, currentUser)
        .then((data) => {
          const accessToken = data?.data?.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          //   console.log(data.data.result);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
