import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return <div className="page-transition">{children}</div>;
};

export default PageTransition;
