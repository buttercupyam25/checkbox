let imageShown = false;// Flag to check if the image has been shown
document.getElementById('task1').addEventListener('change', function () {
        checkTasks();
});

document.getElementById('task2').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task3').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task4').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task5').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task6').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task7').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task8').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task9').addEventListener('change', function() {
    checkTasks();
});

document.getElementById('task10').addEventListener('change', function() {
    checkTasks();
});


function checkTasks() {
    // Check if all tasks are checked
    if (document.getElementById('task1').checked && 
        document.getElementById('task2').checked && 
        document.getElementById('task3').checked && 
        document.getElementById('task4').checked && 
        document.getElementById('task5').checked &&
        document.getElementById('task6').checked &&
        document.getElementById('task7').checked &&
        document.getElementById('task8').checked &&
        document.getElementById('task9').checked &&
        document.getElementById('task10').checked &&
        !imageShown) {
        // Display a message or show an image
        displayGoodJobImage();   
    }           
}

function displayGoodJobImage(duration) {
    imageShown = "true"
    // Create an image element
    let img = document.createElement("img");
    img.src = "good-job.gif"; // Set the path to your image
    duration = "5000";
    // Get the container where you want to append the image
    let container = document.getElementById("icontainer");
    // Append the image to the container
    container.innerHTML = "";
    setTimeout(function() {
        img.style.display = "none"
    
}, duration,container.appendChild(img));
}
