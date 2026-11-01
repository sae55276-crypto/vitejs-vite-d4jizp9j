import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wkpnsowfdmkxnkpcwvpx.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_FVsnM17uqApEL0Kra2KprA_rNjXcjsb";

export const supabase = createClient(supabaseUrl, supabaseKey);