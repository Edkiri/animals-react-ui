import { Spinner } from 'flowbite-react';

export default function AppSpinner() {
  return (
    <div className='w-full flex justify-center items-center'>
      <Spinner aria-label="Default status example" />
    </div>
  );
}