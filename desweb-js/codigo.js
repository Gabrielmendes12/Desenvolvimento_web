const preenche = (atleta) => {
    
    const container = document.createElement('div')
    const titulo = document.createElement('h3')
    const imagem = document.createElement('img')
    const descricao = document.createElement('p')

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    document.body.appendChild(container);
}

/*
let index = 0;
while (index < atletas.length) {
    preenche(atletas[index]);
    index++;
}*/


for(let index = atletas.length - 1; index >= 0; index--){
    preenche(atletas[index]);
    console.log(index, 'loop for');
}