import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { Briefcase, DotIcon } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './mode-toggle';



export default function Header() {
  const [showSignin , setShowSignin] = useState(false)
const handleOverlayClick=(e)=>{
  if(e.target === e.currentTarget){
    setShowSignin(false)
  }
  
}

  return (
    <div className="flex justify-between items-center container">
   <a href="/">
   <h2 className='text-3xl font-thin'>JOBREX JOB</h2>
   </a>
    
    <div className='flex gap-3 justify-center items-center'>
    <div>
  
   
    </div>

        <div><ThemeToggle/></div>
        <header>
      <SignedOut>
        <Button onClick={() => setShowSignin(true)}>Login</Button>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox:'size-10'
            }
          }}
           >
           <UserButton.MenuItems>
          <UserButton.Link
            label="My Job"
            labelIcon={<Briefcase size={19} />}
            href="/myjobs"
          />
        </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
   {
    showSignin && (
      <div className='flex justify-center items-center inset-0 absolute z-50 bg-gray-950/80' 
      onClick={handleOverlayClick}
      >

     <SignIn
     signUpForceRedirectUrl='/onboard'
      fallbackRedirectUrl='/onboard'
    
     />
   </div>
    )
   }
    </header>
    </div>

    </div>
  )
}
