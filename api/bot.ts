export default async function handler(req: any, res: any) {
  // For serverless, we can't maintain persistent connections
  // This endpoint just indicates the bot service is available
  
  res.setHeader('Access-Control-Allow-Origin', 'https://replit.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'text/html');
  
  if (req.method === 'POST' && req.url === '/start-bot') {
    // Note: Minecraft bots need persistent connections, which don't work well with serverless
    res.status(200).json({ 
      message: 'Bot service endpoint available',
      note: 'Minecraft bots require persistent connections - consider using a different hosting solution'
    });
  } else {
    res.status(200).send('<h3>AFKBot Service - Minecraft bot requires persistent hosting</h3>');
  }
}
