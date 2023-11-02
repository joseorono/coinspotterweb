import {
  Prisma,
  Places,
  PrismaClient,
  User,
  payment_methods,
  currencies,
} from "@prisma/client";

import { faker } from "@faker-js/faker";
import { id } from "ethers";

const prisma = new PrismaClient();

async function main() {
  await seedBlogPostTable(8, true);
  await seedPaymentMethodsAcceptedTable(8, true);
  // await seedTransactionsTable(8, true);
  // await seedAccountTable(8, true);
  await seedPlacesTable(true);
  await seedUsersTable(true);
  await seedPaymentMethodsTable(true);
  await seedCurrenciesTable(true);
}

// Make it all run
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// BlogPost

async function seedBlogPostTable(
  rowCount: number = 8,
  shouldCleanFirst: boolean = false
) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.blogPost.deleteMany({});
  }

  //let blogPostCounter = 0;

  for (let i = 0; i < rowCount; i++) {
    const blogPost = await prisma.blogPost.upsert({
      where: {
        id: i + 1,
      },
      update: {},
      create: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(5),
        published: true,
        author: faker.person.firstName() + " " + faker.person.lastName(),
      },
    });
  }
}

/*/ Account

// async function seedAccountTable(
//   rowCount: number = 8,
//   shouldCleanFirst: boolean = false
// ) {
//   // First, delete the existing account
//   if (shouldCleanFirst) {
//     await prisma.account.deleteMany({});
//   }

//   //let accountCounter = 0;

//   for (let i = 0; i < rowCount; i++) {
//     const account = await prisma.account.upsert({
//       where: {
//         id: (i + 1).toString(),
//       },
//       update: {},
//       create: {
//         type: faker.lorem.paragraphs(5),
//         userId: ,
//         provider: faker.lorem.paragraphs(5),
//         providerAccountId: faker.lorem.paragraphs(5),
//       },
//     });
//   }
// }
*/


// User

async function seedUsersTable(shouldCleanFirst: boolean = false) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.user.deleteMany({});
  }

  //let blogPostCounter = 0;

  const userArr: User[] = [];
  let newUser: User;

  // Mauricio Garcia
  newUser = {
    id: "1",
    name: "Mauricio Garcia",
    email: "maggnoone@gmail.com",
    emailVerified: faker.date.anytime(),
    image: faker.image.urlLoremFlickr({ category: "business" }),
  };

  userArr.push(newUser);

  // Pedro Zavala
  newUser = {
    id: "2",
    name: "Pedro Zavala",
    email: "pedrozav@gmail.com",
    emailVerified: faker.date.anytime(),
    image: faker.image.urlLoremFlickr({ category: "business" }),
  };

  userArr.push(newUser);

  // Jose Oroño
  newUser = {
    id: "3",
    name: "Jose Oroño",
    email: "joseomaker@gmail.com",
    emailVerified: faker.date.anytime(),
    image: faker.image.urlLoremFlickr({ category: "business" }),
  };

  userArr.push(newUser);

  // Copia lo anterior y quita este comando

  // Hacer insert en la tabla de todo los datos...
  const addUsers = async () => await prisma.user.createMany({ data: userArr });
  await addUsers();
}

//  wallets - Later

// payment_methods - Binance, Reserve, PayPal, etc

async function seedPaymentMethodsTable(shouldCleanFirst: boolean = false) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.payment_methods.deleteMany({});
  }

  //let blogPostCounter = 0;

  const paymentMethodArr: payment_methods[] = [];
  let newPaymentMethod: payment_methods;

  // Binance
  newPaymentMethod = {
    id: "1",
    name: "Binance",
    symbol: faker.phone.imei(),
    terms_policy_url: faker.lorem.paragraphs(5),
  };

  paymentMethodArr.push(newPaymentMethod);

  // Reserve
  newPaymentMethod = {
    id: "2",
    name: "Reserve",
    symbol: faker.phone.imei(),
    terms_policy_url: faker.lorem.paragraphs(5),
  };

  paymentMethodArr.push(newPaymentMethod);

  // Paypal
  newPaymentMethod = {
    id: "3",
    name: "Paypal",
    symbol: faker.phone.imei(),
    terms_policy_url: faker.lorem.paragraphs(5),
  };

  paymentMethodArr.push(newPaymentMethod);

  // Payoneer
  newPaymentMethod = {
    id: "4",
    name: "Payoneer",
    symbol: faker.phone.imei(),
    terms_policy_url: faker.lorem.paragraphs(5),
  };

  paymentMethodArr.push(newPaymentMethod);

  // Zelle
  newPaymentMethod = {
    id: "5",
    name: "Zelle",
    symbol: faker.phone.imei(),
    terms_policy_url: faker.lorem.paragraphs(5),
  };

  paymentMethodArr.push(newPaymentMethod);

  // Copia lo anterior y quita este comando

  // Hacer insert en la tabla de todo los datos...
  const addPaymentMethods = async () =>
    await prisma.payment_methods.createMany({ data: paymentMethodArr });
  await addPaymentMethods();
}

// currencies - Pertenece a payment_methods, puede de BTC, ETH, USDT, etc

async function seedCurrenciesTable(shouldCleanFirst: boolean = false) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.currencies.deleteMany({});
  }

  //let blogPostCounter = 0;

  const currencyArr: currencies[] = [];
  let newCurrency: currencies;

  // Binance
  newCurrency = {
    id: "1",
    paymethod_id: "1",
    name: "BTC",
    symbol: faker.phone.imei(),
    contract_address: faker.lorem.paragraphs(5),
  };

  currencyArr.push(newCurrency);

  // Reserve
  newCurrency = {
    id: "2",
    name: "ETH",
    paymethod_id: "2",
    symbol: faker.phone.imei(),
    contract_address: faker.lorem.paragraphs(5),
  };

  currencyArr.push(newCurrency);

  // Paypal
  newCurrency = {
    id: "3",
    name: "USDT",
    paymethod_id: "3",
    symbol: faker.phone.imei(),
    contract_address: faker.lorem.paragraphs(5),
  };

  currencyArr.push(newCurrency);

  // Payoneer
  newCurrency = {
    id: "4",
    name: "RESERVE USD",
    paymethod_id: "4",
    symbol: faker.phone.imei(),
    contract_address: faker.lorem.paragraphs(5),
  };

  currencyArr.push(newCurrency);

  // Zelle
  newCurrency = {
    id: "5",
    name: "ZELLE USD",
    paymethod_id: "5",
    symbol: faker.phone.imei(),
    contract_address: faker.lorem.paragraphs(5),
  };

  currencyArr.push(newCurrency);

  // Copia lo anterior y quita este comando

  // Hacer insert en la tabla de todo los datos...
  const addCurrencies = async () =>
    await prisma.currencies.createMany({ data: currencyArr });
  await addCurrencies();
}

/*/ transactions

// async function seedTransactionsTable(
//   rowCount: number = 8,
//   shouldCleanFirst: boolean = false
// ) {
//   // First, delete the existing blog posts
//   if (shouldCleanFirst) {
//     await prisma.transactions.deleteMany({});
//   }

//   //let blogPostCounter = 0;

//   for (let i = 0; i < rowCount; i++) {
//     const transactions = await prisma.transactions.upsert({
//       where: {
//         id: (i + 1).toString(),
//       },
//       update: {},
//       create: {
//         user_id: (i + 1).toString(),
//         place_id: (i + 1).toString(),
//         paymethod_id: (i + 1).toString(),
//         amount: parseInt(
//           faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: "$" })
//         ),
//         user: {
//           connect: { id: rand(1, 3) },
//         },
//       },
//     });
//   }
// }
*/

// Places

async function seedPlacesTable(shouldCleanFirst: boolean = false) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.places.deleteMany({});
  }

  //let blogPostCounter = 0;

  const placesArr: Places[] = [];
  let newPlace: Places;

  // Bibas
  newPlace = {
    id: "1",
    name: "Bibas",
    description: "Bar al lado del Bellas Artes",
    address: "Calle 84 # 13-17",
    latitude: new Prisma.Decimal(4.667),
    longitude: new Prisma.Decimal(74.05),
    google_places_id: "",
    on_google_maps: false,
    profile_pic_url: faker.image.urlLoremFlickr({ category: "business" }),
    user_id: "1",
  };

  placesArr.push(newPlace);

  // Fresh Market
  newPlace = {
    id: "2",
    name: "Fresh Market",
    description:
      "Super Fresh Market en Maracaibo. Productos de carnicería, víveres, charcutería, frutas, verduras.",
    address: "Calle 76, CC Centro Norte, CC Delicias Norte",
    latitude: new Prisma.Decimal(10.722489),
    longitude: new Prisma.Decimal(71.622799),
    google_places_id: "",
    on_google_maps: false,
    profile_pic_url: faker.image.urlLoremFlickr({ category: "business" }),
    user_id: "2",
  };

  placesArr.push(newPlace);

  // Dia de Burguers
  newPlace = {
    id: "3",
    name: "Dia de Burguers",
    description: "Restaurante de comida rápida 🍔 Cheeseburgers",
    address: "P9C9+P3X, Centro Sambil Nivel Lago, Avenida 16, Maracaibo, Zulia",
    latitude: new Prisma.Decimal(10.721423),
    longitude: new Prisma.Decimal(-71.632106),
    google_places_id: "",
    on_google_maps: false,
    profile_pic_url: faker.image.urlLoremFlickr({ category: "business" }),
    user_id: "3",
  };

  placesArr.push(newPlace);

  // Gamatech Mcbo
  newPlace = {
    id: "4",
    name: "Gamatech Mcbo",
    description: "Computadoras | Laptop | Tablet Productos Importados Gamatech",
    address: "Centro Comercial Gran Bazar, Centro, Maracaibo, Zulia",
    latitude: new Prisma.Decimal(10.641237),
    longitude: new Prisma.Decimal(-71.619386),
    google_places_id: "",
    on_google_maps: false,
    profile_pic_url: faker.image.urlLoremFlickr({ category: "business" }),
    user_id: "4",
  };

  placesArr.push(newPlace);
  // Copia lo anterior y quita este comando

  // Hacer insert en la tabla de todo los datos...
  const addPlaces = async () =>
    await prisma.places.createMany({ data: placesArr });
  await addPlaces();
}

// payment_methods_accepted - Luego de hacer el modelo de payment_methods y tables

async function seedPaymentMethodsAcceptedTable(
  rowCount: number = 8,
  shouldCleanFirst: boolean = false
) {
  // First, delete the existing blog posts
  if (shouldCleanFirst) {
    await prisma.payment_methods_accepted.deleteMany({});
  }

  //let blogPostCounter = 0;

  for (let i = 0; i < rowCount; i++) {
    const payment_methods_accepted =
      await prisma.payment_methods_accepted.upsert({
        where: {
          id: (i + 1).toString(),
        },
        update: {},
        create: {
          paymethod_id: (i + 1).toString(),
          place_id: (i + 1).toString(),
        },
      });
  }
}

// De ultimo

//Products - Los Places tienen productos
// product_categories
