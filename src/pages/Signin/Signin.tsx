import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const _state = state as { from?: Location } | undefined;
  const { route } = useAuthenticator((context) => [context.route]);

  const from = _state?.from?.pathname || "/";

  useEffect(() => {
    if (route === "authenticated") {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

  return (
    <div className="grid content-start justify-items-center pt-8 pb-16">
      <Authenticator formFields={{ signUp: { name: { order: 1 } } }} />
    </div>
  );
}