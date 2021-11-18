import {useSession, signOut} from 'next-auth/react';

const SignOutButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      <button
        onClick={() => signOut()}
        className="w-96 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        onClick={() => signIn()}
      >
        Disconnect App
      </button>
    </div>
  );
};

export default SignOutButton;
