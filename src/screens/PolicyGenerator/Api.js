const agreement_compliance_api='https://100080.pythonanywhere.com/api/agreements/'

export const post_agreement_compliance=async(object)=>{
    try{
        const response= await fetch(agreement_compliance_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object),
        })
        const json=await response.json()
        return json
    }
    catch(error){
        console.error(error);
    }

} 
