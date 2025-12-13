import Button from '../ui/buttons/Button';
import Input from '../ui/Input';

function ContactForm() {
  return (
    <form action="" className="my-3">
      <Input placeholder="Your full name" name="name" id="name" />
      <Input type="email" placeholder="Your email" name="email" id="email" />
      <textarea
        name="message"
        className="bg-primary-50 
      text-primary-900 
      w-full 
      rounded-md 
      px-4 py-3 
      shadow-sm 
      border border-primary-300 
      placeholder-gray-400
      focus:outline-none 
      focus:ring-1 focus:ring-accent-500 
      focus:border-accent-500 
      transition-all duration-200 mb-1"
        id="message"
        cols="10"
        placeholder="message"
        rows="5"
      ></textarea>
      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all"
      >
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
