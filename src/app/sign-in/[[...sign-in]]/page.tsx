import { SignIn } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth-shell";

export default function SignInPage() {
  return (
    <AuthShell mode="sign-in">
      <SignIn />
    </AuthShell>
  );
}
