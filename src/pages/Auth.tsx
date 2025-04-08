
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData extends LoginFormData {
  firstName: string;
  lastName: string;
}

const Auth = () => {
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  const loginForm = useForm<LoginFormData>();
  const registerForm = useForm<RegisterFormData>();
  
  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const userData = {
        full_name: `${data.firstName} ${data.lastName}`,
      };
      await signUp(data.email, data.password, userData);
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-atlas-darkbg to-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent">
              Atlas<span className="text-white">IO</span>
            </h1>
          </Link>
          <p className="text-gray-400 mt-2">Access the future map of humanity</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Welcome Back</CardTitle>
                <CardDescription className="text-gray-400">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={loginForm.handleSubmit(handleLogin)}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      className="bg-gray-700 border-gray-600 text-white"
                      {...loginForm.register('email', { required: true })} 
                    />
                    {loginForm.formState.errors.email && (
                      <p className="text-red-500 text-sm">Email is required</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-gray-300">Password</Label>
                      <Link to="#" className="text-xs text-blue-400 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password"
                      className="bg-gray-700 border-gray-600 text-white"
                      {...loginForm.register('password', { required: true })} 
                    />
                    {loginForm.formState.errors.password && (
                      <p className="text-red-500 text-sm">Password is required</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-atlas-blue hover:bg-atlas-blue/90" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Create an Account</CardTitle>
                <CardDescription className="text-gray-400">
                  Join Atlas IO to explore and contribute
                </CardDescription>
              </CardHeader>
              <form onSubmit={registerForm.handleSubmit(handleRegister)}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                      <Input 
                        id="firstName"
                        className="bg-gray-700 border-gray-600 text-white"
                        {...registerForm.register('firstName', { required: true })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                      <Input 
                        id="lastName"
                        className="bg-gray-700 border-gray-600 text-white"
                        {...registerForm.register('lastName', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail" className="text-gray-300">Email</Label>
                    <Input 
                      id="registerEmail" 
                      type="email" 
                      placeholder="name@example.com"
                      className="bg-gray-700 border-gray-600 text-white"
                      {...registerForm.register('email', { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword" className="text-gray-300">Password</Label>
                    <Input 
                      id="registerPassword" 
                      type="password"
                      className="bg-gray-700 border-gray-600 text-white"
                      {...registerForm.register('password', { 
                        required: true,
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters"
                        }
                      })}
                    />
                    {registerForm.formState.errors.password?.message && (
                      <p className="text-red-500 text-sm">{registerForm.formState.errors.password.message}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-atlas-green hover:bg-atlas-green/90" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:underline">
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
