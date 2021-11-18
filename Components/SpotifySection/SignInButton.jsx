import {signIn} from 'next-auth/react';

const SignInButton = () => {
  return (
    <button
      className="w-48 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      onClick={() => signIn()}
    >
      Connect App
    </button>
  );
}

export default SignInButton;
