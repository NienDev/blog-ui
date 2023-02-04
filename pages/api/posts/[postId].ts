import { NextApiRequest, NextApiResponse } from "next";
import data from "../data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId } = req.query;
  const { Posts } = data;
  let post = Posts.find((post) => post.id == Number(postId));
  if (post) {
    res.status(200).json(post);
  } else {
    post = Posts.filter((post) => post.category.toLowerCase().includes(postId));
    if (post) {
      res.status(200).json(post);
    } else res.status(404).json({ message: "data not found" });
  }
}
