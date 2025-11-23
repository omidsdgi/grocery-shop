// import {createClient} from "@supabase/supabase-js";
//
// if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
//     throw new Error("Missing Supabase environment variables");
// }
// export const supabase=createClient(
//     process.env.SUPABASE_URL,
//     process.env.SUPABASE_KEY
// );

import { createClient } from '@supabase/supabase-js';

// در Next.js، متغیرهای client-side باید با NEXT_PUBLIC_ شروع شوند
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
        "Missing Supabase environment variables. " +
        "Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_KEY to your .env.local file"
    );
}

export const supabase = createClient(supabaseUrl, supabaseKey);