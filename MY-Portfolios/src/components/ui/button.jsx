import React from 'react';

const Button = React.forwardRef(
  (
    {
      className = '',
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      default:
        'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-purple-500/50',
      destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-lg',
      outline:
        'border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400',
      secondary: 'bg-slate-700/50 text-slate-100 hover:bg-slate-700 border border-slate-600/50',
      ghost: 'text-purple-300 hover:bg-purple-500/10 hover:text-purple-200',
      link: 'text-purple-400 underline-offset-4 hover:underline'
      ,
      // New convenient variants for Projects page
      github: 'bg-cyan-400 text-black hover:bg-cyan-500 shadow-md rounded-full',
      darkPill: 'bg-[#0f0f0f] text-white border border-white/10 hover:bg-[#1a1a1a] rounded-full'
    };

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-12 rounded-lg px-8 text-base',
      icon: 'h-10 w-10'
    };

    const Comp = asChild ? 'a' : 'button';
    const classNames = [baseClasses, variants[variant] || variants.default, sizes[size] || sizes.default, className]
      .filter(Boolean)
      .join(' ');

    return <Comp className={classNames} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button };
