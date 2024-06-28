import React from "react";

interface LayoutProps extends React.ComponentPropsWithoutRef<"main"> {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <main className="layout">{children}</main>;
};
