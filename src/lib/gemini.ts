export async function postQuestion(prompt: string): Promise<string | null> {
    try {
      const response = await fetch('/api/gemini-ai/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (!response.ok) {
        console.error(`Erro na requisição para a API do Gemini: ${response.status}`);
        return null;
      }
  
      const data = await response.json();
      console.log(data)
      return data.text;
    } catch (error) {
      console.error('Erro ao enviar a pergunta para a API do Gemini:', error);
      return null;
    }
  }