function formatarCEP(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    campo.value = campo.value.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca um traço após os primeiros 5 dígitos
}

function formatarCelular(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    campo.value = campo.value.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona parênteses em volta dos primeiros 2 dígitos
    campo.value = campo.value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca um traço após os próximos 5 dígitos
}

function formatarNumero(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove tudo que não é dígito
}