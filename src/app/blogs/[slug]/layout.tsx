import React from "react";

// Metadata + canonical for blog posts is handled in page.tsx (generateMetadata).
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
