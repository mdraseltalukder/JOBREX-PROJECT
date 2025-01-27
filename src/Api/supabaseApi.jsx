import supabase from '@/utils/supabase'

export default async function getjobs() {
    const { data, error } = await supabase
    .from('jobs')
    .select('*')

if(error){
  console.log(error)
}else{
  return data
}
}
