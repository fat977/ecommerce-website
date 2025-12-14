import Button from '../ui/buttons/Button';
import SubmitButton from '../ui/buttons/SubmitBtn';
import Input from '../ui/Input';

function ResetPasswordForm() {
  return (
    <form action="">
      <Input type="email" placeholder="Your email" name="email" id="email" />

      <SubmitButton variant="primary" size="lg" className="w-full my-3">
        Submit
      </SubmitButton>
    </form>
  );
}

export default ResetPasswordForm;
