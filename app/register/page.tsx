import AuthBox from "@/components/auth/AuthBox";

export default function RegisterPage() {
  return (
    <AuthBox
      title={"Register"}
      text={"Already have an account?"}
      linkPath={"/login"}
      link={"login"}
    />
  );
}
