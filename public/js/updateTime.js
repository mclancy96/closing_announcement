const updateTime = () => {
    const currentTimeElement = document.getElementById('currentTime');
    const timeNow = new Date(Date.now());
    currentTimeElement.innerText = timeNow.toLocaleString();
    setTimeout(updateTime, 1000);
}

updateTime();