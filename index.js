const chart = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

// Lista de productos

for (let i = 0; i < chart.length; i++) {
  hacerLista(chart[i]);
}

function hacerLista(product) {
  console.log("id:" + product.id);
  console.log("name:" + product.name);
  console.log("price:" + product.price);
  console.log("count:" + product.count);
  console.log("premium:" + product.premium);
  console.log("-");
}

// Eliminar producto (primer ID) y calulcar el total (solo de los tres siguientes)

chart.splice(0, 1);

let total = 0;

for (const product of chart) {
  total += product.price * product.count;
  console.log("Precio total: " + total);
}

// Filtro prime y aviso en caso de que no haya.

for (let i = 0; i < chart.length; i++) {
  if (chart[i].premium === true) {
    console.log(chart[i].name + " es prime");
  } else {
    console.log("No hay productos premium");
  }
}
