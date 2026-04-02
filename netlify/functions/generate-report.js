exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
 
  // CORS headers so the HTML page can call this function
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
 
  try {
    const { prompt } = JSON.parse(event.body);
 
    if (!prompt) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'No prompt provided' }) };
    }
 
    // Call Anthropic using the secret key stored in Netlify environment variables
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
 
    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic error:', errText);
      return { statusCode: response.status, headers, body: JSON.stringify({ error: 'Anthropic API error', detail: errText }) };
    }
 
    const data = await response.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };
 
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', detail: err.message })
    };
  }
};
