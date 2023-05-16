const make_room_api = async(session_id) => {
    const agreement_compliance_api=`https://100096.pythonanywhere.com/d-chat/Legalzard/?session_id=${session_id}`
    try{
        const response= await fetch(agreement_compliance_api)
        const json=await response.json()
        return json
    }
    catch(error){
        console.error(error);
    }
}

export default make_room_api