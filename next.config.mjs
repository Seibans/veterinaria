/** @type {import('next').NextConfig} */

import MillionLint from "@million/lint";

const nextConfig = {
  // ...
};

export default MillionLint.next({
	rsc: true,
	filter: {
	  include: "**/components/*.{mtsx,mjsx,tsx,jsx}",
	},
  })(nextConfig);