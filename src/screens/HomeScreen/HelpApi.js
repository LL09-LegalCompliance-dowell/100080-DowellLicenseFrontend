const make_room_api = async(session_id) => {
    const agreement_compliance_api=`https://100096.pythonanywhere.com/dowell-api/create-room/sales-agent/?session_id=${session_id}`
    try{
        const response= await fetch(agreement_compliance_api)
        const json=await response.json()
        return json
    }
    catch(error){
        console.error(error);
    }
}
export const send_message=async (room_id,user_id,message) => {
    const send_message_api=`https://100096.pythonanywhere.com/send/${room_id}/`
    const message_sent={
        message : message,
        user_id : user_id,
        side : true

    }
    console.log(message_sent)
    try {
        const response= await fetch(send_message_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message_sent),
        })
        return response.status
        
    } catch (error) {
        console.error(error);
        
    }
}

export default make_room_api