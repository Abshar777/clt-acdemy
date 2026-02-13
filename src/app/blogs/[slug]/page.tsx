
"use client"
import PostModal from '@/components/page-sections/blogs/PostModal';
import { useUIStore } from '@/store/uiStore';
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

const page = () => {
    const { post, setPost } = useUIStore();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const serachParams = useSearchParams();
    const id = serachParams.get('id');
    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`,
            );
            if (response.ok) {
                const data = await response.json();
                setPost(data);
            } else {
                router.push('/blogs');
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            router.push('/blogs');
        } finally {
            setIsLoading(false);
        }
    };
    if (!post) {
        if (id) {
            fetchPosts();
        } else {
            router.push('/blogs');
        }

    }
    return (
        <PostModal post={post} onClose={() => {
            router.back()
            // setPost(null);
        }} />
    )
}

export default page