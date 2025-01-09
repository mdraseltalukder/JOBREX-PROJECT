// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import ThemeToggle from './mode-toggle';



export default function Header() {
  return (
    <div className="flex justify-between items-center container">
   <h2 className='text-3xl font-thin'>JOBREX JOB</h2>
    <div>
  
    {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    </div>
    
        <div><ThemeToggle/></div>
    </div>
  )
}
