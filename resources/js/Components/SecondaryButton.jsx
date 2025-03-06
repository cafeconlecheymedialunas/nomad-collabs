export default function SecondaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `ud-btn btn-thm3 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
       
    );
}
