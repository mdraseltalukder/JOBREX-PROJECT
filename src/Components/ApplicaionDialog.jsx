import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileIcon } from "lucide-react";

// eslint-disable-next-line no-unused-vars
export function ApplicationDialog({ fetchJob, job, user }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Apply now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{job.title}</DialogTitle>
          <DialogDescription>{job.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="exp" className="text-right">
              Years of experience
            </Label>
            <Input id="exp" value="2 years" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="skills" className="text-right">
              Skills
            </Label>
            <Input id="skills" value="React,Nextjs" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="education" className="text-right">
              Educational Qualification
            </Label>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Graduate" id="r1" />
                <Label htmlFor="r1">Graduate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="UnderGraduate" id="r2" />
                <Label htmlFor="r2">UnderGraduate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="others" id="r3" />
                <Label htmlFor="r3">others</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center w-96  mx-auto">
              <FileIcon className="w-12 h-12" />
              <span className="text-sm font-medium text-gray-500">
                Drag and drop a file or click to browse
              </span>
              <span className="text-xs text-gray-500">PDF</span>
            </div>
            <div className="space-y-2 text-sm">
              <Label htmlFor="file" className="text-sm font-medium">
                Upload File
              </Label>
              <Input
                id="file"
                type="file"
                placeholder="File"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Apply now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
