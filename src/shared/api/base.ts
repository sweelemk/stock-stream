import { createClient } from "@supabase/supabase-js";
import { API_URL, API_KEY } from "shared/utils";

const supabase = createClient(API_URL, API_KEY);

export { supabase };