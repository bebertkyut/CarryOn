"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  // Test credentials
  const testCredentials = [
    { email: "test@example.com", password: "password123" },
    { email: "user@test.com", password: "test123" },
    { email: "admin@demo.com", password: "admin123" }
  ];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simulate login process delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if credentials match any test credentials
    const validCredential = testCredentials.find(
      cred => cred.email === formData.email && cred.password === formData.password
    );
    
    if (validCredential) {
      // Successful login - redirect to home page
      console.log("Login successful:", formData.email);
      router.push("/home");
    } else {
      // Invalid credentials - show error
      setError("Invalid email or password. Please try again.");
      console.log("Login failed:", formData);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-800 shadow-2xl rounded-2xl px-8 py-10 border border-zinc-200 dark:border-zinc-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Welcome Back
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                  {error}
                </p>
              </div>
            )}
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg 
                         bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg 
                         bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded"
                />
                <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Remember me
                </span>
              </label>
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 
                       text-white font-semibold py-3 px-4 rounded-lg
                       transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-blue-700 dark:text-blue-300 font-medium mb-2">
                Test Credentials:
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                <div>test@example.com / password123</div>
                <div>user@test.com / test123</div>
                <div>admin@demo.com / admin123</div>
              </div>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400">
              Dont have an account?{" "}
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
