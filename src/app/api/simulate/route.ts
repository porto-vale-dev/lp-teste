// IMPORTANT: THIS FILE IS USED TO SIMULATE A BACKEND, DO NOT DEPLOY.

import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Simulate sending data to an external service (e.g., n8n webhook)
    console.log('Received data:', body);

    // Simulate a successful response
    const webhookUrl = 'https://n8n.portovaleconsorcio.com.br/webhook/2edf8e63-f363-47f7-bd2f-82a9eee220b5'
    
    // In a real scenario, you would uncomment the following lines to send the data
    // const response = await fetch(webhookUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
    
    // if (!response.ok) {
    //   console.error('Webhook response error:', await response.text());
    //   throw new Error('Erro ao enviar os dados para o webhook.');
    // }
    
    // const result = await response.json();
    // console.log('Webhook success response:', result);
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return NextResponse.json({
      success: true,
      message: 'Simulação enviada com sucesso!',
      // result,
    });

  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
