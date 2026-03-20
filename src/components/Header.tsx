import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">SkillNexus</span>
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              About Us
            </Link>
            <Link to="/schemes" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Explore Schemes
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {user ? (
                <>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                    {(user.email?.charAt(0) || "U").toUpperCase()}
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setShowLoginModal(true)}
                >
                  Log In
                </Button>
              )}
            </div>
          </nav>
        </div>
      </header>

      <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} />
    </>
  );
};

export default Header;
