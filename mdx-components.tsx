import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => {
    return <h1 className="font-playfair-display">{children}</h1>;
  },
  h2: ({ children }: { children: React.ReactNode }) => {
    return <h2 className="font-playfair-display">{children}</h2>;
  },
  h3: ({ children }: { children: React.ReactNode }) => {
    return <h3 className="font-playfair-display">{children}</h3>;
  },
  h4: ({ children }: { children: React.ReactNode }) => {
    return <h4 className="font-playfair-display">{children}</h4>;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
