import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 20.5 3.5 18l6.5-2.5" />
      <path d="m14 18 6.5-2.5L14 13" />
      <path d="M10 13V4l4 2-4 2" />
      <path d="m3.5 11 6.5 2.5" />
      <path d="m14 4 6.5 7L14 13" />
    </svg>
  ),
};
