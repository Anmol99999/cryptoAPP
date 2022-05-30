import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "z471zsmd",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skBw3R4XYY45eO1hh08rGBho1A3EZS2qv5zqbpQCYrV6D3ah7frs8HJC0ilSP97tSd4phWhXDlcXDQDpIF67AcQICEGfSla9AmaRqYYY0sj1NMQkHUDSq5DsZ6nLAoAWTNoZLok4IsuXOamXMKHBeTfDwla9GUPJG0pxwiVoUFO74Uj7SdEV",
  useCdn: false,
});
