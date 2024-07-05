import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
    const { id } = useParams(); // Pega o id da URL
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            console.log(`Fetching post with id: ${id}`); // Use ${id} corretamente
            const response = await blogFetch.get(`/posts/${id}`); // Use ${id} corretamente
            const data = response.data;
            setPost(data);
        } catch (error) {
            console.error('Error fetching post:', error); // Log do erro detalhado
        }
    };

    useEffect(() => {
        getPost();
    }, [id]);

    return (
        <div className="post-container">
            {!post.title ? (
                <p>Carregando...</p>
            ) : (
                <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default Post;
