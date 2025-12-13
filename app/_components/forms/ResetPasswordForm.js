import Button from '../ui/buttons/Button';
import Input from '../ui/Input';

function ResetPasswordForm() {
  return (
    <form action="">
      <Input type="email" placeholder="Your email" name="email" id="email" />

      <Button
        type="submit"
        variant='primary'
        size='lg'
        className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all"
      >
        Submit
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
