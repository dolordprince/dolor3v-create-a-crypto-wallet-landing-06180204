// Add event listener to the "Get Started" button
document.querySelector('#hero button').addEventListener('click', () => {
    // Add animation to the button
    document.querySelector('#hero button').classList.add('animate');
    // Redirect to the next page after 2 seconds
    setTimeout(() => {
        window.location.href = '#about';
    }, 2000);
});