//the query interface to the database
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//queries go inside the main function:
async function main() {
    const noteCard = await prisma.noteCard.create({
        data: {
            question: "What is CORS short for?",
            title: "CORS",
            answer: "Cross-Origin Resource Sharing"
        },
    });
    console.log(noteCard);
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

    // is this the same as seed.ts I see in prisma folders elswhere?
    // do we need one function or file to seed the database with many files, and then one to add posts?