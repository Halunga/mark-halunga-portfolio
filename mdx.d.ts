declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: any;
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
