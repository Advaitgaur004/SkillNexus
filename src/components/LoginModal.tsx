import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const mobileSchema = z.object({
  mobile: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit mobile number" }),
});

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { toast } = useToast();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mobile number
    const result = mobileSchema.safeParse({ mobile });
    
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    // Mobile number is valid
    toast({
      title: "OTP Sent!",
      description: `A verification code has been sent to ${mobile}`,
    });
    
    setMobile("");
    setError("");
    onOpenChange(false);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    if (error) setError("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            Welcome Back
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSendOTP} className="space-y-6 py-4">
          <div>
            <label htmlFor="mobile" className="text-sm font-medium mb-2 block">
              Mobile Number
            </label>
            <Input 
              id="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile number" 
              value={mobile}
              onChange={handleMobileChange}
              className={error ? "border-destructive" : ""}
              maxLength={10}
            />
            {error && (
              <p className="text-sm text-destructive mt-1">{error}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90" 
            size="lg"
          >
            Send OTP
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
