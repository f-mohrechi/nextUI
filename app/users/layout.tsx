export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full py-8 md:py-10">
      <div className="inline-block max-w-3xl w-full">{children}</div>
    </section>
  );
}
