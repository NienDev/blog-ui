import { NextApiRequest, NextApiResponse } from "next";
import data from "../data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Posts } = data;
  if (Posts) {
    res.status(200).json({ Posts });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
}
