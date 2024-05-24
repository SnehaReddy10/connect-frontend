const Footer = () => {
  return (
    <div className="w-full h-10 text-xs bg-slate-800 text-slate-300 flex items-center justify-around">
      <div className="">&copy; 2024 SolutionSpace. All rights reserved.</div>
      <nav className="space-x-4">
        <a href="/about" className="hover:underline">
          About Us
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </nav>
      <div>
        Contact us at{' '}
        <a href="mailto:support@solutionspace.com" className="hover:underline">
          support@solutionspace.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
