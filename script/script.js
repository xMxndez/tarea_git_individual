document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario predeterminado
    
    // Obtener valores de usuario y contraseña
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    
    // Validar credenciales
    if (username === 'ant' && password === 'admin') {
        // Redireccionar al usuario si las credenciales son correctas
        window.location.href = 'form.html';
    } else {
        // Mostrar un mensaje de error o realizar otras acciones si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos');
    }
});
