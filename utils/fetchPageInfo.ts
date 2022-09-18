import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const query = groq`
  *[_type == "pageInfo"]
`;

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const response = await sanityClient.fetch(query);
  return response[0];
};
