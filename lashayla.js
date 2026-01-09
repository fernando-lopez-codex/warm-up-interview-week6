const SUPABASE_URL = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Pets_Table";
const APIKEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id3F0dXltYmt0d3JobW9wanRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTA3MDcsImV4cCI6MjA4MDM4NjcwN30.V6AO7DgIWRYIn8sHdWDjGVLQ0PSHAsl_6vyGKk0z2Qs"
  

async function getPets() {
  let response = await fetch(SUPABASE_URL, {
    method: "GET",
    headers: {
      apikey: APIKEY,
    },
  });

  let data = await response.json();
  console.log(data);

 // renderTasks(data);
}

getPets();