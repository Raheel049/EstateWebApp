import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"

export const getPosts = async (req, res) => {

    const query = req.query
  try {
    const posts = await prisma.post.findMany(
        {
            where:{
                city: query.city || undefine,
                type: query.type || undefine,
                property: query.property || undefine,
                bedroom: parseInt(query.bedroom) || undefine,
                price: {
                  gte:  parseInt(query.minPrice) || 0,
                  lte:  parseInt(query.maxPrice) || 100000,
                }
               
            }
        }
    ); 

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "falied to get posts ",
    });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const post = await prisma.post.findUnique({
      where: { id },
       include: {
        postDetail: true,
        user: {
            select:{
                username: true,
                avatar:true
            }
        }
      },


    });

    // let userId

    // const token = req.cookies?.token

    // if(!token){
    //     userId : null
    // }
    // else{
    //     jwt.verify(token,process.JWT_SECRET_KEY,
    //         async(error , payload)=>{

    //             if(error){
    //                 userId=null
    //             }
    //             else{
    //                 userId=payload.id
    //             }
    //         }
    //     )
    // }

    // const save = await prisma.savedPost.findUnique({
    //     where :{
    //         userId_postId:{
    //             postId: id,
    //             userId
    //         }
    //     }
    // })

    // res.status(200).json({...post,isSaved: saved ? true: false});
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "falied to get post",
    });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  console.log("req.body postDetail", body.postDetail);

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
      include: {
        postDetail: true,
        user: true
      },
    });
    // console.log("newPost", newPost)

    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "falied to create post",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.status(200).json;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "falied to updatePost post",
    });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    console.log("post", post);

    if (post.userId !== tokenUserId) {
      return res.status(401).json({
        message: "Not Authorize",
      });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Post deleted!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "falied to deletePost post",
    });
  }
};