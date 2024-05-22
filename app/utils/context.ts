import { ScoredPineconeRecord } from "@pinecone-database/pinecone";
import { getMatchesFromEmbeddings } from "./pinecone";
import { getEmbeddings } from './embeddings'

export type Metadata = {
  url: string,
  text: string,
  chunk: string,
}

// The function `getContext` is used to retrieve the context of a given message
export const getContext = async (message: string, namespace: string, mostraName: string, maxTokens = 3000, minScore = 0.7, getOnlyText = true): Promise<string | ScoredPineconeRecord[]> => {

  // Get the embeddings of the input message
  console.log(message)
  const embedding = await getEmbeddings(message);

  // Retrieve the matches for the embeddings from the specified namespace
  const matches = await getMatchesFromEmbeddings(embedding, 3, namespace, mostraName);

  console.log(matches)

  // Filter out the matches that have a score lower than the minimum score
  const qualifyingDocs = matches.filter(m => m.score && m.score > minScore);
  console.log('qualifyingDocs');
  console.log(qualifyingDocs);
  
  if (!getOnlyText) {
    // Use a map to deduplicate matches by URL
    console.log('return qualifyingDocs');
    return qualifyingDocs
  }

  let docs = matches ? qualifyingDocs.map(match => (match.metadata as Metadata).text) : [];
  // Join all the chunks of text together, truncate to the maximum number of tokens, and return the result
  console.log("return docs")
  console.log(docs)
  return docs.join("\n").substring(0, maxTokens)
}
