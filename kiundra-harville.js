const supabaseUrl = "https://aenyreivppdnxzmgoclo.supabase.co";
const supabaseKey = "sb_publishable_VWRMIZxkReey80S_WtMCNA_1loUGnQ8";

const client = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

function getPets() {
  client
    .from("pets")
    .select("Name, Age")
    .then(({ data, error }) => {
      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) return;

      document.getElementById("pets").innerHTML =
        data.map(p => `<li>${p.name} (${p.age})</li>`).join("");
    });
}
