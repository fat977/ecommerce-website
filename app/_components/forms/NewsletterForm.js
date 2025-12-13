import Button from '../ui/buttons/Button';

function NewsletterForm() {
  return (
    <form className="flex py-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 rounded-l-md bg-primary-50 text-gray-900 focus:outline-none"
      />
      <Button
        variant="primary"
        size="md"
        className="rounded-l-xs"
      >
        Subscribe
      </Button>
     
    </form>
  );
}

export default NewsletterForm;
