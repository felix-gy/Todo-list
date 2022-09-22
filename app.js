document.addEventListener('DOMContentLoaded', () => {
	//Crear nueva tarea 
	document.querySelector('#new-task').onsubmit = () => {
		const li = document.createElement('li');

		const cb = document.createElement("input");
		cb.setAttribute("type", "checkbox");
		li.appendChild(cb);
		cb.classList = "corrected";
			 
		const bt = document.createElement("button");
		bt.innerHTML += "X";
		bt.setAttribute("class", "btn_delete");
		bt.addEventListener("click",(e) => {
			document.querySelector('#tasks').removeChild(li);
		});
		  

		li.innerHTML += document.querySelector('#task').value;
		li.appendChild(bt);

		document.querySelector('#tasks').append(li);
		document.querySelector('#task').value = '';
		return false;
	};
});

//Boton de completar todas las tareas 
const btn_tasks = document.querySelector("#btn_tasks");

function checkbox_all(a){
	if(!(a.checked)){
		a.click();
	}
}
function check_all() {
	const checkbox_tasks = document.querySelectorAll('input[type="checkbox"]');
	checkbox_tasks.forEach(checkbox_all);
	console.log(checkbox_tasks);

	const li_tasks = document.querySelectorAll("li");
	li_tasks.forEach( element => element.className = "done");
}

btn_tasks.addEventListener("click", check_all);

//Funcion de marcado de tarea completado
function check(e) {
  if (e.target.type == "checkbox") {
    e.target.parentNode.classList.toggle("done")
  }
}

tasks.addEventListener("click", function(e) {
  check(e)
})