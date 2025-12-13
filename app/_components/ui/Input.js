function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  className,
  disabled = false,
  ...props
}) {
  return (
    <div className={`flex flex-col my-3 w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="mb-1 font-medium text-primary-900">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className="
      
      text-primary-900 
      w-full 
      rounded-md 
      px-4 py-3 
      shadow-sm 
      bg-white
      border border-primary-300 
      placeholder-gray-400
      focus:outline-none 
      focus:ring-1 focus:ring-accent-500 
      focus:border-accent-500 
      transition-all duration-200
       disabled:bg-gray-100 
    disabled:text-gray-400 
    disabled:border-gray-300 
    disabled:cursor-not-allowed
    "
        {...props}
      />
    </div>
  );
}

export default Input;
