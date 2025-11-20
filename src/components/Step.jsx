export default function Step({ children, stepNum, title }) {
  return (
    <section className="flex flex-dir-col gap-8">
      <h4>
        <b>Step {stepNum}:</b> {title}
      </h4>
      <div className="row-container">{children}</div>
    </section>
  );
}
