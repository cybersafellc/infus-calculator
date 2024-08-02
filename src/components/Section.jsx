export default function Section({ className, children }) {
  return (
    <>
      <section className={"py-5 mx-auto w-full bg-white " + className}>
        {children}
      </section>
    </>
  );
}
