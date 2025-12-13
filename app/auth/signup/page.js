import SignupForm from '@/app/_components/forms/SignupForm';

export const metadata = {
  title: 'Sign Up',
};

function SignUp() {
  return (
    <div className="mx-auto my-10 w-full max-w-xl px-7">
      <SignupForm />
    </div>
  );
}

export default SignUp;
