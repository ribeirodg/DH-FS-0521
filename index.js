let pets = [
    {
        nome:'Atena', 
        nomeDono:'Alessandra',
        idade:6,
        tipo:'cachorro',
        raca:'street dog',
        peso:20,
        genero:'fêmea',
        cor:'caramelo',
        vacinado: true
    },
    { nome:'Gaia', 
    nomeDono:'Alessandra',
    idade:3,
    tipo:'cachorro',
    raca:'street dog',
    peso:20,
    genero:'fêmea',
    cor:'branco',
    vacinado: true
},
{nome:'Leão', 
nomeDono:'Daiane',
idade:12,
tipo:'cachorro',
raca:'pastor alemão',
peso:25,
genero:'macho',
cor:'preto com caramelo',
vacinado: true
}
]

const listarPets = () => 
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 

    function cadastrarPets (arrayPets, objetoPet){
        return arrayPets.push (objetoPet)
        {nome:'Gaia', 
        nomeDono:'Alessandra',
        idade:3,
        tipo:'cachorro',
        raca:'street dog',
        peso:20,
        genero:'fêmea',
        cor:'branco',
        vacinado: true
            
        }
    }
function validaDados (objetoPet){
    return (objeto.nome && 
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca && 
        objetoPet.peso && 
        objetoPet.genero && 
        objetoPet.cor && 
        objetoPet.vacinado    )
}
}
listarPets();


function cadastrasPet(arrayPets,objetoPet) {
if(typeof objetoPet == 'object') {
    if(validaDados (objetoPet))
    return arrayPets.push(objetoPet)
} else {
    console.log('Insira um objeto válido')
}
}


