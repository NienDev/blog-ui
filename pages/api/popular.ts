import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Popular } = data;
  if (Popular) {
    res.status(200).json(Popular);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
}
