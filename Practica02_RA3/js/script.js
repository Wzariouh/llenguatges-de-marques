
// 1️. Selecciona els elements HTML necessaris , escribir un texto en el imput y que ese  vaya a li  
document.getElementById("afegirElement").addEventListener("click", function() {
    // Get the value from the input field
    const text = document.getElementById("textElement").value;
// 2. No permetre afegir elements buits (cal validar l’input)
    if (text.trim() === "") {
        alert("Escriu un text abans d'afegir un element.");
        return;
    }
    
// 3️. Crear un nou element <li> amb un text dinàmic
    const li = document.createElement("li");
    
// 4️. Afegir botons "Editar" i "Eliminar" dins de cada <li>
    const span = document.createElement("span");
    span.classList.add("editable");
    span.textContent = text;
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById("llistaElements").appendChild(li);
    document.getElementById("textElement").value = "";

  // 5️.El text ha de canviar de color cada vegada que es faci clic sobre ell.
    span.addEventListener("click", function() {
        const colors = ["red", "green", "blue", "orange", "purple"]; 
        let currentColor = span.style.color;
        let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        span.style.color = nextColor;
    });
    // 6.  El botó "Eliminar" ha de permetre eliminar l’element.
    deleteButton.addEventListener("click", function() {
        li.remove();
    });
    // 7. El text editable s’ha de desactivar quan l'usuari guardi els canvis.

    editButton.textContent = "Editar";
    editButton.addEventListener("click", function() {
        if (!span.isContentEditable) {
            span.contentEditable = "true";
            span.focus();
            editButton.textContent = "Guardar";
        } else {
            span.contentEditable = "false";
            editButton.textContent = "Editar";
        }
    }); 
    });
    