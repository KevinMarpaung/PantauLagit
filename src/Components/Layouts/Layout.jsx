export default function Layout({ children }) {
  return (
    <div className=" md:h-screen dark:bg-[#0e1728] md:flex flex-col   justify-between">
      {children}
    </div>
  );
}
