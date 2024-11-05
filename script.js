// variables
const input = document.querySelector('.input-box')
const taskBox = document.querySelector('.task-box')

console.log(input);

// creating array for the list
let task = []

// adding to list

//clicking enter adds to list

function addToList() {
    input.addEventListener('keypress', (e) => {

        if (e.key === "Enter") {
            inputTask = input.value
            task.push(inputTask)
            console.log(task);

        }
    })
}


// updating list items




// active list





// completed list




// clear list








// drag and drop



// local storage