import ResetPasswordForm from '@/app/_components/forms/ResetPasswordForm';

export const metadata = {
  title: 'Reset Password',
};

function Reset() {
  return (
    <div className="mx-auto my-10 w-full max-w-xl px-7  sm:px-6">
      <div
        className="
          w-full
          max-w-md sm:max-w-lg
          bg-primary-50
          p-6 sm:p-8
          rounded-xl
          shadow-lg
          text-center
        "
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-2">
          Reset your password
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          We will send you an email to reset your password
        </p>

        {/* Form */}
        <ResetPasswordForm className="space-y-4" />
      </div>
    </div>
  );
}

export default Reset;
