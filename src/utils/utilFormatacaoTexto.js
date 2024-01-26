const UtilFormatacaoTexto = {
  formataPrimeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  },
};

export default UtilFormatacaoTexto;
