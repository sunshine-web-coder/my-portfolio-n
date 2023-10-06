
export const Textarea = ({ label, name,placeholder, value, onChange, className }) => {

  return (
    <div>
      {label && (
        <div className="mb-[11px]">
          <label
            className={`text-sm font-semibold`}
            htmlFor={name}
          >
            {label}
          </label>
        </div>
      )}

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`resize-none pl-[15px] pr-[10px] pt-[13px] pb-[12px] border border-gray-600 text-sm font-normal w-full h-[119px] bg-white bg-opacity-5 rounded shadow ${className}`}
      />
    </div>
  );
};
