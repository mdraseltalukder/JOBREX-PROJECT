"use client";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";

import getCompanies from "@/api/companies";
import JobCard from "@/Components/JobCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import getJobs from "../api/jobs";

export default function AllJobs() {
  const { isLoaded } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [company, setCompany] = useState("");
  const { data: jobs, fetchData: fetchJobs } = useFetch(getJobs, {
    company,
    searchQuery,
  });
  const { data: comapnies, fetchData: fetchCompanies } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) fetchJobs();
  }, [isLoaded, searchQuery, company]);
  useEffect(() => {
    if (isLoaded) fetchCompanies();
  }, [isLoaded]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const query = formData.get("search-job");
    console.log(query);
    if (query) setSearchQuery(query);
  };
  // clear all filter and serach query

  const handleClear = () => {
    setSearchQuery("");
    setCompany("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Find Your Dream Job
        </h1>
        <p className="text-muted-foreground">
          Discover opportunities that match your skills and career goals
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <form onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Search jobs..."
              className="pl-10"
              name="search-job"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              // value and onchange dile kisu lekhar sathe sathei api call hoi fole website slow hote pare tai avoid kora better
            />
          </form>
        </div>
        <div className="w-full md:w-64 ">
          <Select value={company} onValueChange={(value) => setCompany(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by company" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup className="group bg-[#1f2937] z-10 hover:bg-[#0a111a]">
                <SelectItem onClick={() => setCompany("")}>All</SelectItem>
                {comapnies?.map(
                  (company) => (
                    console.log(company),
                    (<SelectItem value={company.id}>{company.name}</SelectItem>)
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button variant="destructive" onClick={handleClear}>
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        <JobCard jobs={jobs} />
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No jobs found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or location filter to find more
            opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
