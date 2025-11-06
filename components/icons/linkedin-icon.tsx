import type { SVGProps } from "react";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M6.5 10v10M6.5 5.5v0" strokeLinecap="round" />
    <path
      d="M10.5 10v10M10.5 14s.5-3 4-3 3.5 3 3.5 3v6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
  </svg>
);

export default LinkedInIcon;
