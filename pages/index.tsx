// import { Admin, ListGuesser, Resource } from "react-admin";
import react, { useState, useEffect } from "react";
import { Admin, CustomRoutes, Resource, ListGuesser } from "react-admin";
import { LoginPage, SetPasswordPage } from "ra-supabase-ui-materialui";
import { BrowserRouter, Route } from "react-router-dom";
// import { UserList } from "./components/Users";
import { createClient } from "@supabase/supabase-js";
import { supabaseDataProvider, supabaseAuthProvider } from "ra-supabase-core";

const apiUrl = "https://zuktsaruhtmtredtmfjd.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a3RzYXJ1aHRtdHJlZHRtZmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDQzODAsImV4cCI6MTk5MjAyMDM4MH0.hO3qE32QhyTzT1IpOa9XfM5ylC7OQsuTVU3mXM1OkUY";
const supabase = createClient(apiUrl, apiKey);
export const authProvider = supabaseAuthProvider(
  supabase,
  {}
  //   getIdentity: async (user) => {
  //     const { data, error } = await supabase
  //       .from("userdata")
  //       .select("id, first_name, last_name")
  //       .match({ email: user.email })
  //       .single();
  //     if (!data || error) {
  //       throw new Error();
  //     }
  //     return {
  //       id: data.id,
  //       fullName: `${data.first_name} ${data.last_name}`,
  //     };
  //   },
  // }
);

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = supabaseDataProvider({
  instanceUrl: apiUrl,
  apiKey: apiKey,
  supabaseClient: supabase,
});
const App = () => {
  const [loading, setLoading] = useState("");
  useEffect(() => setLoading("Loaded"), []);
  if (loading === "Loaded") {
    return (
      <BrowserRouter>
        <Admin
          dataProvider={dataProvider}
          authProvider={authProvider}
          loginPage={LoginPage}
        >
          <Resource name="posts" list={ListGuesser} />
          <Resource name="userdata" list={ListGuesser} />
        </Admin>
      </BrowserRouter>
    );
  }
};

export default App;
