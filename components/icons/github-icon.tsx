import type { SVGProps } from "react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path
      d="M9.5 19.5c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 5.77 5.07 5.07 0 0 0 19.91 2S18.73 1.65 16 3.46a13.38 13.38 0 0 0-6 0C7.27 1.65 6.09 2 6.09 2A5.07 5.07 0 0 0 6 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GithubIcon;
