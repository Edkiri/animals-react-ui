export default function AppInput({ label, error, errorMessage, ...inputProps }) {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={inputProps.id}
        className="block text-md leading-4 text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          className="text-md block w-full rounded border-0 py-2 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          type={inputProps.type || 'text'}
          {...inputProps}
        />
        {error ? (
          <span className="block mt-2 text-red-500">{errorMessage}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
