function fillList() {
    var ul = document.querySelector('.lista ul');
    console.log(ul)

    var frases = ['Feliz Aniversário',
        'Feliz Natal com muita paz',
        'Welcome to Brazil!',
        'Good Luck',
        'See you soon',
        'Boa Noite',
        'Bom Dia',


    ]
    for (let i = 0; i < frases.length; i++) {
        //variavel que possui o valor da string do array frases
        var liContent = frases[i];
        //console.log(liContent)

        // console.log(frases[i])

        //cria o elemento li
        var li = document.createElement('li');

        //guarda a string em cada li criada
        li.textContent = liContent;
        
        //adicionar o li dentro ul, empilhando a cada laço
        ul.appendChild(li);

        //const element = array[index];
        //console.log(li)
    }

}

//chama a função quando o arquivo html for sempre carregado
fillList();