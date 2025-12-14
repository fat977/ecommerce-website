import { signUpAction } from '@/app/actions/auth';
import Input from '../ui/Input';
import SubmitButton from '../ui/buttons/SubmitBtn';
import TextLink from '../ui/links/TextLink';

function SignupForm() {
  return (
    <form
      action={signUpAction}
      className=" w-full
    max-w-md
    mx-auto
    bg-primary-50
    p-6 sm:p-8
    rounded-xl
    shadow-lg
    space-y-4"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 text-center mb-4">
        Create your account
      </h2>

      {/* Inputs */}
      <div className="">
        <Input placeholder="First name" name="fname" id="fname" />
        <Input placeholder="Last name" name="lname" id="lname" />
      </div>

      <Input type="email" placeholder="Your email" name="email" id="email" />
      <Input type="password" placeholder="Your password" name="password" id="password" />

      {/* Submit Button */}
      <SubmitButton variant="primary" size="lg" className="w-full">
        Create
      </SubmitButton>

      {/* Sign in link */}
      <div className="text-center text-sm text-gray-700">
        <span>Have already an account? </span>
        <TextLink href="/auth/signin" underline>
          {' '}
          Sign in
        </TextLink>
      </div>
    </form>
  );
}

export default SignupForm;
