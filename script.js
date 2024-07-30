function storeLoginPassword() {
    const password = document.getElementById('login-password').value;
    console.log('Login Password:', password);
    // Aqui você pode armazenar a senha em um local seguro
  }
  
  function storeSignupPassword() {
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
  
    console.log('Signup Information:', {
      firstName,
      lastName,
      email,
      password
    });
  
    // Aqui você pode armazenar a senha em um local seguro
  }
  
  function togglePasswordVisibility() {
    const passwordField = document.getElementById('signup-password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
  