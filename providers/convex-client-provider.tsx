"use client";

import { Loading } from "@/components/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { SignOutButton } from "@clerk/nextjs";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// .env.local 파일에 정의한 clerk url
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        {/* <SignOutButton /> */}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
