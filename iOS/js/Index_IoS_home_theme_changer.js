const modeToggleBtn = document.getElementById('mode-toggle-btn');
    const body = document.body;

    modeToggleBtn.addEventListener('click', () => {
      // Toggle dark/light mode
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
      
      // Store the current mode in localStorage
      const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('mode', currentMode);
      });

    // Check if there's a mode stored in localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      body.classList.add('dark-mode');
    }