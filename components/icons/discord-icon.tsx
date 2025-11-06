import type { SVGProps } from "react";

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path
      d="M8.75 9.5c-.69 0-1.25.6-1.25 1.34 0 .74.56 1.34 1.25 1.34.69 0 1.25-.6 1.25-1.34 0-.74-.56-1.34-1.25-1.34ZM15.25 9.5c-.69 0-1.25.6-1.25 1.34 0 .74.56 1.34 1.25 1.34.69 0 1.25-.6 1.25-1.34 0-.74-.56-1.34-1.25-1.34Z"
      fill="currentColor"
    />
    <path
      d="M5.5 16.5c2.7 2 5.8 2 8.99 2 0 0 .46-.55.84-1 1.77.48 2.75.5 2.75.5l.37-3.72c.02-.21-.07-.41-.24-.53-.22-.16-.57-.3-.57-.3l.56-2.63c.1-.56-.08-1.14-.48-1.54C15.9 7.5 14.12 6 12 6c-2.12 0-3.9 1.5-5.72 3.28-.4.4-.58.98-.48 1.54l.56 2.63s-.35.14-.57.3c-.17.12-.26.32-.24.53l.45 4.22Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DiscordIcon;
