const sol = document.getElementById('sol')
const pai = document.getElementById('raio1')
const lua = document.getElementById('lua')
const container = document.getElementById('container')

var states = 0


lua.addEventListener('click', ()=>{
    if(states == 0){

        lua.classList.add('animacaoLua')
        sol.classList.add('animacaoSol')
        pai.classList.add('animacao')
        container.classList.add('containerSol')

        lua.classList.remove('animacaoLuaVoltar')
        sol.classList.remove('animacaoSolVoltar')
        pai.classList.remove('animacaoVoltar')
        container.classList.remove('containerLua')

        states = 1

    }else if( states == 1){

        states = 0

        lua.classList.add('animacaoLuaVoltar')
        sol.classList.add('animacaoSolVoltar')
        pai.classList.add('animacaoVoltar')
        container.classList.add('containerLua')

        lua.classList.remove('animacaoLua')
        sol.classList.remove('animacaoSol')
        pai.classList.remove('animacao')
        container.classList.remove('containerSol')

    }
})