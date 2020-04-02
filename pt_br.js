/* 
Algoritmo para gestão de produto em épocas de no/low code
#nocode #lowcode
/*

//Para todo novo JTBD, chamar a função
aprender(JTBD) {
  enquanto(não tiver escala ou tiver caixa) {
    crie / aperfeiçoe a hipótese;
    crie / aperfeiçoe um MVP com no / low code em um novo subdomínio; //na relação LTV/CAC tente aumentar ao máximo o LTV
    se(a solução para o JTBD tiver débito técnico) { //ou seja escalou
      ganhar(débito técnico);
    }
  }
}

//Para todo novo débito técnico
ganhar(débito técnico) {
  enquanto tiver caixa {
    monte / melhore tecnicamente o squad;
    desenvolva da maneira mais eficiente o produto; //na relação LTV/CAC tente reduzir ao máximo o CAC
    analise os dados; //internos e externos
    se(novo JTBD) {
      aprender(novo JTBD); //cria um novo ciclo
    }
  }
}
