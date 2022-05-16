import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //Google Sign In
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [token] = useToken(googleUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (googleLoading) {
    return <Loading />;
  }

  let signInError;
  if (googleError) {
    signInError = (
      <p className="text-[red] mb-4">
        <span className="text-sm">{googleError?.message}</span>
      </p>
    );
  }
  return (
    <div>
      {signInError}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
