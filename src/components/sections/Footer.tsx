import React from 'react';

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'About us',
      links: [
        { label: 'Investors', href: '/investors' },
        { label: 'Features', href: '/features' },
        { label: 'Book a demo', href: '/book-demo' },
        { label: 'Security', href: '/security' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Credits Cards', href: '/credit-cards' },
        { label: 'Gift Cards', href: '/gift-cards' },
        { label: 'Savings accounts', href: '/savings' },
        { label: 'NFT', href: '/nft' }
      ]
    },
    {
      title: 'Useful Links',
      links: [
        { label: 'Free rewards', href: '/rewards' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Affiliate program', href: '/affiliates' }
      ]
    },
    {
      title: 'Social',
      links: [
        { label: 'Changelog', href: '/changelog' },
        { label: 'License', href: '/license' },
        { label: 'Site Maps', href: '/sitemap' },
        { label: 'News', href: '/news' }
      ]
    }
  ];

  return (
    <footer className="bg-[#30283440] text-gray-300 backdrop-blur-[16px] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and description section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
              <span className="text-white font-semibold">EXTRABANK.</span>
            </div>
            <p className="text-sm text-gray-400">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>copyright 2023 DoraDesign All Rights Reserved</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>This page uses cookies. See cookies details</span>
            <a href="/cookies" className="underline hover:text-white">
              here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;