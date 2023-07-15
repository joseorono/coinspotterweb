
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.CS_SUPABASE_URL as string;
const supabaseAnonKey: string = process.env.CS_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


