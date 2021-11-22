const arrowDown = document.querySelector('.hero svg');
const mainSection = document.querySelector('.main')


arrowDown.addEventListener('click', () => {
    const mainPosition = mainSection.getBoundingClientRect().top;
    const startPosition = window.pageXOffset;
    const distance = mainPosition - startPosition;
    
    const duration = 1000;
    let startTime= null;
    
    const easingInOut = (t, b, c, d) =>  {
        t /= d/2;
        if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
        t--;
        return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
    };

    const animationScroll = (currentTime) => {
        if(startTime === null) startTime = currentTime;
        console.log(startTime)
        const timeElapsed = currentTime - startTime;
        const run = easingInOut(timeElapsed,startPosition, distance, duration)
        window.scrollTo(0, run);

        if(timeElapsed < duration) requestAnimationFrame(animationScroll)

    }
     
    requestAnimationFrame(animationScroll);
})
