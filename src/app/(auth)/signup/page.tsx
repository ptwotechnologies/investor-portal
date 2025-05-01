import React from 'react';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SignUp: React.FC = async () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-primary-800 text-2xl font-medium">
            SignUp
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input type="text" placeholder="Username" className="w-full" />
          </div>
          <div>
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Founder / Investor" />
              </SelectTrigger>
              <SelectContent className="bg-primary-900 text-primary-200">
                <SelectItem value="founder">Founder</SelectItem>
                <SelectItem value="investor">Investor</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input type="password" placeholder="Password" className="w-full" />
          </div>
          <Button
            className="w-full hover:bg-primary-200 hover:text-primary-800"
            variant="default"
          >
            Signup
          </Button>

          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-primary-800 text-sm">Or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <Button
            variant="outline"
            className="flex w-full items-center gap-2 justify-center hover:bg-primary-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
            Sign up with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center justify-center">
          <p className="text-primary-800 text-sm">
            Already Registered?{' '}
            <a href="/signin" className="underline">
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
