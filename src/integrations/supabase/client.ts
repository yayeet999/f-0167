// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yxgigquianxzrliiipqr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4Z2lncXVpYW54enJsaWlpcHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMTA3NDEsImV4cCI6MjA1MDc4Njc0MX0.6CEgbMaReUQNVrpoTFSL5s9_Wop9xOulMC3XwZ82kuo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);