import ResetPasswordForm from '@/app/_components/forms/ResetPasswordForm';
import Button from '@/app/_components/ui/buttons/Button';

export const metadata = {
  title: 'Reset Password',
};

function Reset() {
  return (
    <div className="mx-auto my-10 w-full max-w-xl px-7 text-center bg-primary-50 p-8 rounded-xl shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-primary-900 mb-2">Reset your password</h2>

      {/* Subtext */}
      <p className="text-gray-700 mb-6">
        We will send you an email to reset your password
      </p>

      {/* Form */}
      <ResetPasswordForm className="space-y-4" />
    </div>
  );
}

export default Reset;
