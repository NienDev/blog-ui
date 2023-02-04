import { Post } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import data from "../data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId } = req.query;
  const { Posts } = data;
  if (!postId) {
    res.status(404).json({ msg: "Data not found" });
    return;
  }
  let post = Posts.find((post) => post.id == Number(postId));
  if (post) {
    res.status(200).json(post);
  } else {
    let posts = Posts.filter((post) =>
      post.category.toLowerCase().includes(postId[0])
    );
    if (posts) {
      res.status(200).json(posts);
    } else res.status(404).json({ message: "data not found" });
  }
}
