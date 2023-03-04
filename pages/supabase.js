import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zuktsaruhtmtredtmfjd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a3RzYXJ1aHRtdHJlZHRtZmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDQzODAsImV4cCI6MTk5MjAyMDM4MH0.hO3qE32QhyTzT1IpOa9XfM5ylC7OQsuTVU3mXM1OkUY"
);
