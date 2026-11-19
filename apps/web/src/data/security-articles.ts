import {existsSync,readdirSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
export interface SecurityArticle {id:string;revision:number;slug:string;title:string;summary:string;body:string;category:string;author:string;publishedAt:string;sourceHash:string}
const directory=resolve('public/san-pham/unesco-security/content');
export const securityArticles:SecurityArticle[]=(existsSync(directory)?readdirSync(directory).filter(f=>f.endsWith('.json')):[]).map((file:string):SecurityArticle=>{
 const raw=readFileSync(resolve(directory,file));const a=JSON.parse(raw.toString('utf8'));
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)||file!==a.slug+'.json'||!Number.isInteger(a.revision)||a.revision<1||!/^[0-9a-f-]{36}$/i.test(a.id)||!Number.isFinite(Date.parse(a.publishedAt)))throw new Error('Invalid Security article identity: '+file);
 for(const [key,max] of Object.entries({title:160,summary:320,body:30000,category:60,author:100}))if(typeof a[key]!=='string'||!a[key].trim()||a[key].length>max)throw new Error('Invalid Security article '+key+': '+file);
 return {...a,sourceHash:createHash('sha256').update(raw).digest('hex')};
}).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
