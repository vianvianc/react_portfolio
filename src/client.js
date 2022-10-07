import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "er8woj0o",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skvFO6MVKmZ8GZqZ4reEoxaq1oNJ227sLqR0AIA53G2aViW8V1ukRoEVmoYYMtLr0n5ZdSrXk70uglXfJCjzY3PhJQuhZDe2zSgggUN6QWaryRT59jCczYQFFjFoRg9h2OQ8O7Gnen0h1ZHX43sLYlHwGtOZASPj45kt4GM3Hy7i3O1Ku1YC",
});

// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'your-project-id',
//   dataset: 'bikeshop',
//   apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
//   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// })

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
