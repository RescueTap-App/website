// 'use client';

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BLOGS_API } from "../constants/api";
// import { Card, CardContent, CardHeader, Button, Skeleton } from "@mui/material";

export default function Blog() {
  // const router = useRouter();
  // const { id } = router.query;
  // const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     const fetchBlogDetails = async () => {
  //       try {
  //         const response = await axios.get(`${BLOGS_API}/${id}`);
  //         setBlog(response.data);
  //       } catch (err) {
  //         setError("Error fetching blog details. Please try again later.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchBlogDetails();
  //   }
  // }, [id]);

  // if (loading) {
  //   return (
  //     <div className="p-6">
  //       <Skeleton variant="rectangular" width="75%" height={40} className="mb-4" />
  //       <Skeleton variant="text" width="100%" className="mb-2" />
  //       <Skeleton variant="text" width="85%" className="mb-2" />
  //       <Skeleton variant="rectangular" width="100%" height={200} />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <p className="p-6 text-red-500">{error}</p>;
  // }

  // if (!blog) {
  //   return <p className="p-6">Blog not found.</p>;
  // }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* <Card>
        <CardHeader title={blog.title} subheader={`Published on ${new Date(blog.createdAt).toLocaleDateString()}`} />
        <CardContent>
          <div className="prose prose-lg">
            <p>{blog.content}</p>
          </div>
        </CardContent>
      </Card>
      <Button variant="outlined" className="mt-4" onClick={() => router.back()}>
        Go Back
      </Button> */}
    </div>
  );
}
