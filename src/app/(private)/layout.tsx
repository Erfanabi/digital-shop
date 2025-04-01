import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Private Layout</p>

      {children}
    </div>
  );
}

export default Layout;
