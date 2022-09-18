import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typings";

const query = groq`
    *[_type == "skill"]
`;

export const fetchSkills = async (): Promise<Skill[]> => {
  const response = await sanityClient.fetch(query);
  return response;
};
