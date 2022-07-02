import { saveTask, getTasks , onGetTasks } from './firebase.js'

const tasksContainer = document.getElementById('tasks-container')
const taskForm = document.getElementById('task-form');

window.addEventListener('DOMContentLoaded', async () => {
  
  onGetTasks ((querySnapshot) => {
  let html = "";
  let html1 = "";
  
  querySnapshot.forEach(doc => {
  	// statements
  		const task = doc.data();
  		html += "<div>"
  			//+ "<button class='btn-delete'>Delete</button>" 
  			//+ "</b>- " 
  			//+ task.dt
  			//+ "</b>"
  			+ "<b> --> "
  			+ task.title 
  			+ " |  </b>"  
  			+ task.description 
  			+ " </b> " 
  			+ "</div><br>";
  		document.getElementById('tasks-container').innerHTML = html ;
  		//console.log(doc.data());
  	});
  console.log(querySnapshot);

	});
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = taskForm['task-title']
    const description = taskForm['task-description']

    console.log(title.value ,description.value)

    saveTask(title.value , description.value)
    
})
