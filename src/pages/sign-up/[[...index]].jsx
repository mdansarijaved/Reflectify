import { SignUp } from "@clerk/nextjs";



const SignUpPage = () => (
  <SignUp path="/sign-up" afterSignUpUrl="/" routing="path" signInUrl="/sign-in" />
  );

export default SignUpPage;