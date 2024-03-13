import AuthLayout from "@/components/auth/AuthLayout";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
