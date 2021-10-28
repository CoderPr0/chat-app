const choices = document.querySelectorAll('.choices > input')

choices.forEach((choice)=>{
    choice.addEventListener('change', ()=>{
        choices.forEach((notChosen)=>{
            if(choice.checked == true){
                notChosen.checked = false
                choice.checked = true
            }
        })
    })
})