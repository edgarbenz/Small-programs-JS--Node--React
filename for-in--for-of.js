const teams= ["Australia: 'Los Canguros'",
"España: 'La Roja'",
"Alemania: 'Die Mannschaft'",
"Brasil: 'La Canarinha'",
"Argentina: 'La Albiceleste'",
"Perú:'La Blanquirroja'",
"Arabia Saudita: 'Los Hijos del Desierto'",
"Corea del Sur: 'Los Guerreros Taeguk'",
"Panamá: 'La Marea Roja'",
"Marruecos: 'Los Leones del Atlas'",
"Japón: 'Los Samuráis Azules'",
"Nigeria: 'Las Águilas Verdes'",
"Serbia: 'Las Águilas Blancas'",
"Irán: 'Los Príncipes de Persia'"
,"Senegal: 'Los Leones de Teranga'",
"Egipto: 'Los Faraones'",
"Túnez: 'Las Águilas de Cartago'",
"Suecia: 'Oro Azul'",
"Costa Rica: 'Los Ticos'",
"Islandia: 'Los Vikingos'",
"Dinamarca: 'Dinamita Danesa'",
"Croacia: 'Ardientes'",
"Uruguay: 'Los Charrúas'",
"México: 'El Tri'",
"Colombia: 'Los Cafeteros'",
"Portugal: 'Los Lusos'",
"Inglaterra: 'Los Tres Leones'",
"Suiza: 'El Equipo nacional'",
"Rusia: 'El Equipo Nacional'",
"Francia: 'Los Galos'",
"Polonia: 'La Roja y Blanca'",
"Bélgica: 'Diablos Rojos'"];

console.log("ejemplo con for in, de indice");
for (const team in teams) {
    console.log(team);
}

console.log("ejemplo con for of, de valor");
for (const team of teams) {
    console.log(team);
}