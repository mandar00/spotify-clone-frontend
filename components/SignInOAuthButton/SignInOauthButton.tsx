'use client'
import { useSignIn } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignInOauthButton = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }

  const singnInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };
  return (
    <>
      <Button
        variant="secondary"
        onClick={singnInWithGoogle}
        className="w-full text-white border-zinc-200 h-1 p-4"
      >
        Continue With Google
      </Button>
    </>
  );
};
export default SignInOauthButton;
