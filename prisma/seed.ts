import { Prisma, Places, PrismaClient } from '@prisma/client';


import {
    faker
} from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    seedBlogPostTable(8, true);
    seedPlacesTable(true);
}

// Make it all run
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
   process.exit(1)
});

// BlogPost

async function seedBlogPostTable(rowCount: number = 8, shouldCleanFirst: boolean = false) {
    // First, delete the existing blog posts
    if (shouldCleanFirst) {
        await prisma.blogPost.deleteMany({});
    }

    //let blogPostCounter = 0;

    for (let i = 0; i < rowCount; i++) {
        const blogPost = await prisma.blogPost.upsert({
            where: {
                id: i + 1
            },
            update: {},
            create: {
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraphs(5),
                published: true,
                author: faker.person.firstName() + " " + faker.person.lastName()
            }
        });
        
    }

}

// Account

// User

//  wallets - Later

// payment_methods - Binance, Reserve, PayPal, etc
// currencies - Pertenece a payment_methods, puede de BTC, ETH, USDT, etc


// transactions

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
        profile_pic_url: faker.image.urlLoremFlickr({ category: 'business' }),
        user_id: "1"

    }

    placesArr.push(newPlace);

    // Fresh Market
    // Copia lo anterior y quita este comando

    // Hacer insert en la tabla de todo los datos...
    const addPlaces = async () =>  await prisma.places.createMany({ data: placesArr });
    addPlaces();
}

// payment_methods_accepted - Luego de hacer el modelo de payment_methods y tables



// De ultimo

//Products - Los Places tienen productos
// product_categories