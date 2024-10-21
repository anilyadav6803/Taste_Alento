
import { Separator } from '@radix-ui/react-separator'
import { Sheet, SheetContent, SheetTrigger , SheetTitle, SheetDescription } from './UI/sheet'
import { Menu } from 'lucide-react'
import { Button } from './UI/button'
export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='test-orange-500'/>
        </SheetTrigger>
        <SheetContent className='' >
            <SheetTitle>Welcome to Taste Alento</SheetTitle>
            <Separator/>
            <SheetDescription className='flex '>
                <Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
