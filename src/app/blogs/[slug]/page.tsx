
"use client"
import PostModal from '@/components/page-sections/blogs/PostModal';
import { useUIStore } from '@/store/uiStore';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const { post, setPost } = useUIStore();
    const router = useRouter();
    if (!post) {
        router.back()
    }
    return (
        <PostModal post={post} onClose={() => setPost(null)} />
    )
}

export default page