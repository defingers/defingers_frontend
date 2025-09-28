import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  icon: Icon,
  options,
  required = false,
  ...props
}) => (
  <div className="space-y-2 w-full">
    {label && (
      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
        {Icon && <Icon className="w-4 h-4 mr-2 text-orange-500" />}
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all duration-300 focus:bg-white focus:outline-none resize-none ${
          error
            ? "border-red-300 focus:border-red-500"
            : "border-gray-200 focus:border-orange-400"
        }`}
        {...props}
      />
    ) : type === "select" ? (
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 pr-10 rounded-xl border-2 bg-gray-50 transition-all duration-300 focus:bg-white focus:outline-none appearance-none cursor-pointer ${
            error
              ? "border-red-300 focus:border-red-500"
              : "border-gray-200 focus:border-orange-400 hover:border-gray-300"
          }`}
          {...props}
        >
          <option value="" disabled>
            Select a category
          </option>
          {options &&
            options.map((opt) => (
              <option key={opt} value={opt} className="py-2">
                {opt}
              </option>
            ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 transition-all duration-300 focus:bg-white focus:outline-none ${
          error
            ? "border-red-300 focus:border-red-500"
            : "border-gray-200 focus:border-orange-400"
        }`}
        {...props}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
  </div>
);

export default InputField;
