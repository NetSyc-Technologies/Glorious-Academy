import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/copy-of-about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/neet",
        destination: "/courses/neet",
        permanent: true,
      },
      {
        source: "/copy-of-neet",
        destination: "/courses/jee",
        permanent: true,
      },
      {
        source: "/copy-of-jee-main-adv",
        destination: "/courses/mht-cet",
        permanent: true,
      },
      {
        source: "/copy-of-mht-cet",
        destination: "/courses/boards",
        permanent: true,
      },
      {
        source: "/team-4",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/alumni",
        destination: "/results",
        permanent: true,
      },
      {
        source: "/about-4",
        destination: "/resources/pyqs",
        permanent: true,
      },
      {
        source: "/about-5",
        destination: "/centres",
        permanent: true,
      },
      {
        source: "/contact-8",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-1",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/services-4",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
