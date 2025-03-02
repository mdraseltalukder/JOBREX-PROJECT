import { getHiringJob, getSingleJob } from "@/api/jobs";
import { ApplicationDialog } from "@/Components/ApplicaionDialog";
import ApplicationCard from "@/Components/ApplicationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function JobDetails() {
  // const [singleJob, setSinglejob] = useState();
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  // console.log(user);

  // console.log(user_id);
  const { data: singleJobs, fetchData: fetchSingleJob } = useFetch(
    getSingleJob,
    { id: id }
  );
  useEffect(() => {
    if (isLoaded) fetchSingleJob();
  }, [isLoaded]);

  // open close handle
  const { fetchData: fetchHiring } = useFetch(getHiringJob, {
    id,
  });

  const handleHiring = (value) => {
    const isOpen = value == "open";
    fetchHiring(isOpen).then(() => fetchSingleJob());
  };

  return (
    <>
      <div className="flex flex-col gap-4 text-left mb-10">
        <div className="flex flex-col gap-3 border border-gray-300 p-4">
          <h1>
            <span className="font-bold">Title:</span>
            {singleJobs?.title}
          </h1>
          <p>
            <span className="font-bold">description:</span>
            {singleJobs?.description}
          </p>
        </div>
        <div>
          <p>Job type: {singleJobs?.location}</p>
          <bold>salary: {singleJobs.salary}</bold>
        </div>
        <div>
          <p> Applicator: {singleJobs?.applications?.length}</p>
        </div>

        {/* isopen */}

        <div className="text-left">
          status:{" "}
          {singleJobs?.isOpen === true ? (
            <span className=" text-green-500">apply now</span>
          ) : (
            <span className="text-red-500">job closed</span>
          )}
        </div>
        <div className="text-left my-5">
          {singleJobs?.recruiter_id === user.id && (
            <Select onValueChange={handleHiring}>
              <SelectTrigger
                className={`w-[180px] ${
                  singleJobs?.isOpen ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <SelectValue
                  placeholder={`${
                    singleJobs?.isOpen ? "Status open" : "Status closed"
                  }`}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">open</SelectItem>
                <SelectItem value="close">close</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        {/* applicants er apply button */}
        {singleJobs?.recruiter_id !== user.id && (
          <ApplicationDialog
            job={singleJobs}
            user={user}
            fetchJob={fetchSingleJob}
          />
        )}

        {/* recruiters der aplication dekha */}
        {singleJobs?.applications?.length > 0 &&
          singleJobs?.recruiter_id === user.id && (
            <div>
              <h2 className="text-left font-bold text-2xl">
                Aplication : ({singleJobs?.applications?.length})
              </h2>

              {/* map applications*/}
              <div>
                {singleJobs?.applications?.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    </>
  );
}
