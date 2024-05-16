import Logo from '@/components/Logo';
import { Skeleton } from '@/components/Skeleton';
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center dark:bg-black">
      <ClerkLoading>
        <div className="flex w-[300px] justify-center items-center mb-10">
          <Skeleton className="h-12 w-12 rounded-full bg-muted mr-2" />
          <Skeleton className="h-6 w-[250px] bg-muted rounded-full" />
        </div>
        <div className="w-[400px] h-[400px]">
          <Skeleton className="bg-muted h-full rounded-lg" />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <Logo />
        <div className="mt-12">{children}</div>
      </ClerkLoaded>
    </div>
  );
};

export default layout;
