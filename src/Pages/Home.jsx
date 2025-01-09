import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <>
    <div>Home</div>

    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    
    </>
  )
}
