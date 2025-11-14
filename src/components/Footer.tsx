import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 SkillSaarthi. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            An initiative to empower India's workforce.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
