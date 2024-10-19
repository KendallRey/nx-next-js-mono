import { MuiButton, MuiTextField } from '@nx-next-js-micro/components';

export const LoginPage = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4 bg-slate-100 p-4 rounded min-w-[320px]">
        <MuiTextField label="Username" required />
        <MuiTextField label="Password" required />
        <div className="flex items-center flex-wrap gap-2">
          <MuiButton size="large" className="flex-1">
            Login
          </MuiButton>
          <MuiButton size="large" className="flex-1" color="secondary">
            Sign Up
          </MuiButton>
        </div>
      </form>
    </main>
  );
};
