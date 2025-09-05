// Comments Controller

import fs from "fs"
import path from "path"
import { Comment } from "@/types/commentType"
import { paginate } from "@/helpers/paginate"
import { PaginatedResponse } from "@/types/paginatedResponse"

// all the comments
export async function getAllComments(): Promise<PaginatedResponse<Comment>> {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), "src/database/comments.json"),
      "utf8"
    )
    const comments: Comment[] = JSON.parse(data)

    // Use the paginate function without skip and limit for default values
    return paginate(comments)
  } catch (error) {
    console.error("Error reading comments.json:", error)
    return {
      data: [],
      metadata: {
        total: 0,
        skip: 0,
        limit: 0,
      },
    }
  }
}

//   get by id
export async function getCommentById(id: number): Promise<Comment | null> {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), "src/database/comments.json"),
      "utf8"
    )
    const comments: Comment[] = JSON.parse(data)

    // Find the comment by id
    const comment = comments.find((cart) => cart.id === id)

    return comment || null // Return null if not found
  } catch (error) {
    console.error("Error reading comments.json:", error)
    return null
  }
}

// get by limit and skip
export async function getCommentsByLimitAndSkip(
  skip: number = 0,
  limit: number = 30
): Promise<PaginatedResponse<Comment>> {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), "src/database/comments.json"),
      "utf8"
    )
    const comments: Comment[] = JSON.parse(data)

    return paginate(comments, skip, limit) // General paginate function used here
  } catch (error) {
    console.error("Error reading comments.json:", error)
    return {
      data: [],
      metadata: {
        total: 0,
        skip: 0,
        limit: 0,
      },
    }
  }
}

// Random comment function
export async function getRandomComment(): Promise<Comment | null> {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), "src/database/comments.json"),
      "utf8"
    )
    const comments: Comment[] = JSON.parse(data)

    // If no comments exist, return null
    if (comments.length === 0) return null

    // Generate a random index and return the comment at that index
    const randomIndex = Math.floor(Math.random() * comments.length)
    return comments[randomIndex]
  } catch (error) {
    console.error("Error reading comments.json:", error)
    return null
  }
}
