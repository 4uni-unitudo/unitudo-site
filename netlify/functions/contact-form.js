// netlify/functions/contact-form.js
exports.handler = async function(event, context) {
    // Verificar se é uma solicitação POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    try {
      // Obter dados do formulário
      const formData = JSON.parse(event.body);
      
      // Criar os parâmetros para a solicitação ao Google Apps Script
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('subject', formData.subject);
      params.append('message', formData.message);
      
      // Fazer a solicitação ao Google Apps Script
      const response = await fetch(process.env.APPS_SCRIPT_URL, {
        method: 'POST',
        body: params
      });
      
      const data = await response.json();
      
      // Retornar a resposta
      return {
        statusCode: 200,
        body: JSON.stringify({ result: 'success' })
      };
    } catch (error) {
      // Lidar com erros
      return {
        statusCode: 500,
        body: JSON.stringify({ result: 'error', message: error.message })
      };
    }
  };
  