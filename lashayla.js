const SUPABASE_URL = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Pets_Table";
const APIKEY ="sb_secret_qPsOy4Arig_so3W4Be524Q_najcQxpH"
  

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