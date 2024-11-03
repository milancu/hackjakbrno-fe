import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"container mx-auto h-screen border border-red-500 p-4"}>
      {children}
    </div>
  );
};

export default Layout;
