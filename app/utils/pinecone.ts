import { Pinecone, ScoredPineconeRecord } from "@pinecone-database/pinecone";

//import { Pinecone } from '@pinecone-database/pinecone';
//const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });


  

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
  if (!pinecone) {
    pinecone =  new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })
    // pinecone = new Pinecone();
    // await pinecone.init({
    //   environment: process.env.PINECONE_ENVIRONMENT!,
    //   apiKey: process.env.PINECONE_API_KEY!,
    // });
  }
  return pinecone
}

//export const pc = new Pinecone({ apiKey: 'YOUR_API_KEY' });

// The function `getMatchesFromEmbeddings` is used to retrieve matches for the given embeddings
const getMatchesFromEmbeddings = async (embeddings: number[], topK: number, namespace: string, mostraName: string): Promise<ScoredPineconeRecord[]> => {
  // Obtain a client for Pinecone
  const pinecone = await getPineconeClient();

  // Retrieve the list of indexes
  //const indexes = await pinecone.listIndexes()

  // Check if the desired index is present, else throw an error
  //if (!indexes.includes(process.env.PINECONE_INDEX!)) {
    //throw (new Error(`Index ${process.env.PINECONE_INDEX} does not exist`))
  //}

  // Get the Pinecone index
  const index = pinecone!.Index(process.env.PINECONE_INDEX!);

  // Define the query request
  const queryRequest = {
    vector: embeddings,
    topK,
    includeMetadata: true,
    filter: { name: { '$eq': mostraName }}
  }

  try {
    // Query the index with the defined request
    //const queryResult = await index.query({ queryRequest })
    const queryResult = await index.query( queryRequest )
    console.log("QUERY RESULT")
    console.log(queryResult.matches![0].metadata)
    return queryResult.matches || []
  } catch (e) {
    // Log the error and throw it
    console.log("Error querying embeddings: ", e)
    throw (new Error(`Error querying embeddings: ${e}`,))
  }
}

export { getMatchesFromEmbeddings }