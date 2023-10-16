import { createClient } from "@supabase/supabase-js";
import { Database } from "shared/types/supabase";
import { API_URL, API_KEY } from "shared/utils";

const supabase = createClient<Database>(API_URL, API_KEY);

export { supabase };