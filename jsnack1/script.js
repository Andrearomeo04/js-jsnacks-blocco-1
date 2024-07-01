const name_list = ["andrea", "giacomo", "francesco", "leonardo", "alessandro", "paolo", "giulio", "filippo", "davide", "manuel"]

let btn = document.getElementById('check');

btn.addEventListener('click', function () {
    let name = document.getElementById('list').value.toLowerCase();

    let list_check = false

    for(i = 0; i<name_list.length; i++) {
        if (name_list[i].toLowerCase() === name)
            list_check = true
    }

    if (list_check === true) {
        console.log('sei dentro alla lista, benvenuto alla festa!')
    }
    else {
        console.log('mi dispiace ma non sei dentro la lista, non posso farti entrare')
    }
})