import hero from "@/assets/img-hero-home.jpg"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Book, Search, ShoppingCart } from 'lucide-react'
import About from "./About"

export default function Home() {
  return (<>
    <div className="min-h-screen">
      {/* Navigation Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <Button variant="ghost" size="icon" className="rounded-full border border-black">
          <Book className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Search */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">
                Find the best
                <br />
                <span className="italic">Freelancers</span> services
              </h1>
              <p className="text-gray-600 text-lg">
                Over 1200+ expect freelancers are waiting for you
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-xl bg-white p-2 rounded-full shadow-sm">
              <div className="flex-1 flex items-center gap-2 pl-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Service title..."
                  className="flex-1 border-none focus:outline-none bg-transparent"
                />
              </div>
              <Select defaultValue="all" className="z-50 ">
                <SelectTrigger className="w-[140px] border-black rounded-xl focus:ring-0 border z-10">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent className="z-10">
                  <SelectItem value="all" >All Cities</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                </SelectContent>
              </Select>
              <Button className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
         <div>
          <img src={hero} alt="" />
         </div>
        </div>
      </div>
    </div>

    <About/>
    
    </>
  )
}

