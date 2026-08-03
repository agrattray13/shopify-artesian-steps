import { PageHeader } from "@/components/shared/page-header";
import { SignInForm } from "@/components/account/sign-in-form";

export const metadata = {
  title: "Account | Artesian Steps",
  description: "Sign in to your Artesian Steps account.",
};

export default function AccountPage() {
  return (
    <>
      <PageHeader title="My Account" subtitle="Sign in to access your orders, appointments, and wishlist." />
      <div className="mx-auto max-w-[500px] px-4 py-16 sm:px-6 lg:px-8">
        <SignInForm />
      </div>
    </>
  );
}
