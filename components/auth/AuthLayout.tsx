import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-auth-pattern w-full h-[93vh] bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="container mx-auto px-6 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
