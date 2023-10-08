import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sexmkezpkoamwtggwqar.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_ANON_KEY!;

const client = createClient(supabaseUrl, supabaseKey);

export default client;
