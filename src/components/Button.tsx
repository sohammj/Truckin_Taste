interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95';
  
  const variantStyles = {
    primary: 'bg-[#ff8c42] text-white shadow-lg hover:shadow-xl hover:bg-[#ff7a2e]',
    secondary: 'bg-[#2d9cca] text-white shadow-lg hover:shadow-xl hover:bg-[#2589b5]',
    outline: 'border-2 border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
