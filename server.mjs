import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const files=new Map(Object.entries({'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.mjs':'app.mjs','/tasks.mjs':'tasks.mjs'}));
const types={html:'text/html',css:'text/css',mjs:'text/javascript'};
createServer(async(req,res)=>{const file=files.get(new URL(req.url,'http://localhost').pathname);if(!file){res.writeHead(404);return res.end('Not found')}try{const data=await readFile(new URL('./docs/'+file,import.meta.url));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]+'; charset=utf-8'});res.end(data)}catch{res.writeHead(500);res.end('Server error')}}).listen(3000,()=>console.log('http://localhost:3000'));
