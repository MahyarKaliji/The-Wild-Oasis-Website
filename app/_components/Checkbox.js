export default function Checkbox({
  children,
  checked,
  onChange,
  disabled = false,
  id,
}) {
  return (
    <div className="flex gap-2">
      <input
        className="h-5 w-5 outline-offset-2 origin-[0] accent-accent-500 disabled:accent-accent-500 hover:accent-accent-600 bg-white"
        type="checkbox"
        id={id}
        name={id}
        // checked={checked}
        // onChange={onChange}
        // disabled={disabled}
      />
      {/* <label htmlFor={!disabled ? id : ""}>{children}</label> */}
      <label htmlFor={id} className="flex-1 flex items-center gap-2">
        {children}
      </label>
    </div>
  );
}
