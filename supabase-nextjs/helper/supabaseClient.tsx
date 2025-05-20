import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create connection between project and Supabase project 
// Restful endpoint for querying - URL, access to things - KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey) 

// Default export from this file
export default supabase;