function Button({
  children,
  size,
  variant,
  className,
  disabled = false,
  onClick,
  ...props
}) {
  const variants = {
    primary:
      'bg-primary-600 hover:bg-primary-700 text-primary-50  shadow-md transition duration-300',

    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} cursor-pointer font-semibold transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
