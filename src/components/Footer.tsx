import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 SkillSaarthi. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              An initiative to empower India's workforce.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
