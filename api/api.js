// api key, not using any eniornment safe for this, so will remove after putting it into github
const api_key=f982b57c4c00bdd8c3092ba573e47396
const url = "http://apilayer.net/api/validate"

// function to verify and return 
export async function verifynumber(num, code) {

  try{
    const response = await fetch(`${url}?access_key=${api_key}&number=${num}&country_code=${code}&format=1`)
    if(!response.ok) throw new Error("network response is not okay");
    
    const data = await response.json
    return data
    
  } catch (error){
    console.log(`Api call failed, ${error}`)
    throw error
  }
}