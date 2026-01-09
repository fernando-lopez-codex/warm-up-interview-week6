const SUPABASE_URL = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Pets_Table";
const APIKEY ="sb_publishable_XCPrRqV-k92iVxMh3PU_8Q_XT29uUuD";


async function getPets() {
  let response = await fetch(SUPABASE_URL, {
    method: "GET",
    headers: {
      apikey: APIKEY,
    },
  });

  let data = await response.json();
  console.log(data);


 
}

getPets();