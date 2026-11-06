const http=require('http');http.createServer((q,r)=>r.end('ok yarn '+process.env.npm_config_user_agent)).listen(process.env.PORT||8000,'0.0.0.0');
