import { createClient } from "@supabase/supabase-js";

console.log("ENV Variables:", {
  supabaseUrl: process.env.VUE_APP_SUPABASE_URL,
  supabaseAnonKey: process.env.VUE_APP_SUPABASE_ANON_KEY,
});

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL || "";
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY || "";

// Criar cliente Supabase com configuração mínima necessária
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Budget {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  status?: "pending" | "contacted" | "completed";
}
