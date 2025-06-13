document.getElementById('submitBtn').addEventListener('click', function() {
    const userComment = document.getElementById('userComment').value;
    const feedback = document.getElementById('feedback');
    const commentList = document.getElementById('commentList');
    
    // Limpiar feedback y textarea
    feedback.textContent = '';
    document.getElementById('userComment').style.borderColor = '#ddd';
    
    // Validación
    if (userComment.trim() === '') {
      feedback.textContent = 'Por favor, escribe un comentario.';
      document.getElementById('userComment').style.borderColor = 'red';
      return;
    }
    
    if (userComment.length > 300) {
      feedback.textContent = 'El comentario no puede superar los 300 caracteres.';
      document.getElementById('userComment').style.borderColor = 'red';
      return;
    }
    
    // Crear un nuevo comentario
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p>${userComment}</p>`;
    commentList.appendChild(newComment);
    
    // Limpiar el campo de texto
    document.getElementById('userComment').value = '';
    
    // Mostrar mensaje de éxito
    feedback.textContent = 'Comentario agregado';
    setTimeout(() => {
      feedback.textContent = '';
    }, 2000);
  });
  