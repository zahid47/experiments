import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sexmkezpkoamwtggwqar.supabase.co";
const supabaseKey = process.env.SUPA_ANON_KEY!;

const client = createClient(supabaseUrl, supabaseKey);

export default client;
