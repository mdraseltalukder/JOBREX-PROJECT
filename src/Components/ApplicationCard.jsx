import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
export default function ApplicationCard({ application }) {
  return (
    <>
      <div className="border border-gray-500 shadow-xl p-5">
        <time className="flex gap-2 mt-10">
          <span>{new Date(application.created_at).toLocaleDateString()}</span>
          <span>{new Date(application.created_at).toLocaleTimeString()}</span>
        </time>
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-xl mt-5">name: rasel</h2>
          <h2 className="text-xl ">skills: {application.skills}</h2>
          <h2 className="text-xl ">
            Experience: {application.experience} years
          </h2>
          <Button className="text-xl mb-5">Download Button</Button>
        </div>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] bg-blue-400">
            <SelectValue placeholder="apply Status " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="applied">applied</SelectItem>
            <SelectItem value="reviewed">reviewed</SelectItem>
            <SelectItem value="accepted">accepted</SelectItem>
            <SelectItem value="rejected">rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
