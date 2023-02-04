import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Trending } = data;
  if (Trending) {
    res.status(200).json({ Trending });
  }
  res.status(404).json({ message: "Data not found" });
}
