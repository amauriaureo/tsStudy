const gatos: string[] = [
    'lagar',
    'simba',
    'mufasa'
]

function exibeGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos))