import supabaseClient from "@/utils/supabase";

export default async function getJobs(token, { company, searchQuery }) {
  // company searchquery {} er vitore karon id destructure kore niyeche ********************
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").select("*,companies(*)");

  if (company) {
    query = query.eq("company_id", company);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase jobs Error:", error);
    return null;
  }

  return data;
}

// get single job

export async function getSingleJob(token, { id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select("*,companies(*), applications(*)")
    .eq("id", id)
    .single();

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase singlejob Error:", error);
    return null;
  }

  return data;
}
//  job close and open
export async function getHiringJob(token, { id }, isOpen) {
  // id{} er vitore karon id destructure kore niyeche ********************
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").update({ isOpen }).eq("id", id).select();

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase hiring status Error:", error);
    return null;
  }

  return data;
}
