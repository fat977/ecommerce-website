import Image from 'next/image';
import Button from '../_components/ui/buttons/Button';
import Input from '../_components/ui/Input';
import getUser from '../_lib/user';
export const metadata = {
  title: 'My Account',
};
async function Account() {
  const user = await getUser();
  const { fname, lname, email } = user.user_metadata;
  return (
    <div className="my-5">
      <div className="flex flex-col items-center py-6 px-4 sm:px-6 md:px-12">
        {/* Profile Form */}
        <form className="flex flex-col gap-6 w-full max-w-3xl shadow-lg p-6 sm:p-8 rounded-xl">
          {/* Name Fields */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-primary-900 font-medium">First Name</label>
              <Input defaultValue={fname} name="fname" className="w-full" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-primary-900 font-medium">Last Name</label>
              <Input defaultValue={lname} name="lname" className="w-full" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-primary-900 font-medium">Email Address</label>
            <Input disabled defaultValue={email} name="email" className="w-full" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
