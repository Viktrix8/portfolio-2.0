import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typings";

const query = groq`
    *[_type == "social"]
`;

export const fetchSocials = async (): Promise<Social[]> => {
  const response = await sanityClient.fetch(query);
  return response;
};
