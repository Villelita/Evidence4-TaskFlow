export function addTask(tasks,title,id){
 if(typeof title !== 'string' || !title.trim() || title.trim().length>100) throw new Error('Enter a title of 1–100 characters.');
 if(tasks.some(t=>t.id===id)) throw new Error('Duplicate ID');
 return [...tasks,{id,title:title.trim(),done:false}];
}
export function toggleTask(tasks,id){return tasks.map(t=>t.id===id?{...t,done:!t.done}:t)}
export function removeTask(tasks,id){return tasks.filter(t=>t.id!==id)}
export function filterTasks(tasks,filter='all'){
 if(!['all','active','done'].includes(filter)) throw new Error('Invalid filter');
 return tasks.filter(t=>filter==='all'||t.done===(filter==='done'));
}
