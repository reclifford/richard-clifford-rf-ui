export default function Row({ children, layout }) {
  return <div className={`row grid gap-16 ${layout}`}>{children}</div>;
}
