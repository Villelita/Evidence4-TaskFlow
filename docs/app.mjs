import {addTask,toggleTask,removeTask,filterTasks} from './tasks.mjs';
const $=id=>document.getElementById(id);
let tasks=[];
try{const saved=JSON.parse(localStorage.getItem('taskflow')||'[]');if(Array.isArray(saved))tasks=saved.filter(t=>t&&typeof t.id==='string'&&typeof t.title==='string'&&typeof t.done==='boolean')}catch{}
function render(){
 $('list').replaceChildren();$('count').textContent=tasks.filter(t=>!t.done).length+' remaining / '+tasks.length+' total';
 const visible=filterTasks(tasks,$('filter').value);$('empty').hidden=visible.length>0;
 for(const task of visible){const li=document.createElement('li');li.className=task.done?'done':'';
 const check=document.createElement('input');check.type='checkbox';check.checked=task.done;check.setAttribute('aria-label','Toggle '+task.title);check.onchange=()=>save(toggleTask(tasks,task.id));
 const title=document.createElement('span');title.textContent=task.title;
 const del=document.createElement('button');del.textContent='Delete';del.setAttribute('aria-label','Delete '+task.title);del.onclick=()=>save(removeTask(tasks,task.id));li.append(check,title,del);$('list').append(li)}
}
function save(next){tasks=next;try{localStorage.setItem('taskflow',JSON.stringify(tasks));$('error').textContent=''}catch{$('error').textContent='Storage unavailable; changes are temporary.'}render()}
$('form').onsubmit=e=>{e.preventDefault();try{save(addTask(tasks,$('task').value,crypto.randomUUID()));$('task').value='';$('task').focus()}catch(e){$('error').textContent=e.message}};
$('filter').onchange=render;render();
