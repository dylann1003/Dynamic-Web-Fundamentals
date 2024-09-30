const themeSelector = document.querySelector('#dropdown');

function changeTheme() {
    const screenMode = themeSelector.value;
    const logoImage = document.querySelector('footer img');

    if (screenMode === "dark") {
        document.body.classList.add('dark');
        logoImage.src = 'logo_dark.png';
    } else {
        document.body.classList.remove('dark');
    }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);