const histpryApi = async orgid => {
  const agreement_compliance_api = `https://100080.pythonanywhere.com/api/agreements/?action_type=agreement-compliance-generated-by-orgainization&organization_id=${orgid}`;
  try {
    const response = await fetch(agreement_compliance_api);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default histpryApi;
