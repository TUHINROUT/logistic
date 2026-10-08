export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-[92%] max-w-[1280px] ${className}`}>{children}</div>;
}
