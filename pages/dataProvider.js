import { supabaseDataProvider } from "ra-supabase-core";
import { supabase } from "./supabase";

export const dataProvider = supabaseDataProvider({
  instanceUrl: "https://zuktsaruhtmtredtmfjd.supabase.co",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a3RzYXJ1aHRtdHJlZHRtZmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDQzODAsImV4cCI6MTk5MjAyMDM4MH0.hO3qE32QhyTzT1IpOa9XfM5ylC7OQsuTVU3mXM1OkUY",
  supabase,
});
