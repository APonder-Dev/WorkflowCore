import type { ReactNode } from "react";

export const metadata = {
  title: "WorkflowCore",
  description: "Event-driven workflow automation engine",
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
