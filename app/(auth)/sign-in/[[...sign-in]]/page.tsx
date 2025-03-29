import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black-100">
      <div className="p-6 bg-grey rounded-lg shadow-lg">
        <SignIn />
      </div>
    </main>
  );
}
