import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Check for authentication state changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_UP" && session) {
      navigate("/dashboard");
      toast({
        title: "Welcome to Narrately!",
        description: "Your account has been created successfully.",
      });
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Your Account</h2>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#1d4ed8',
                    brandAccent: '#1e40af',
                  },
                },
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/dashboard`}
            theme="light"
            view="sign_up"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;