import AuthBox from "@/components/auth/AuthBox";

export default function LoginPage() {
  return (
    <AuthBox
      title={"Login"}
      text={"Don't have an account?"}
      linkPath={"/register"}
      link={"register"}
    />
  );
}
