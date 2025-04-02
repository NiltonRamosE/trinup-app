import { motion } from "framer-motion";

export interface Post {
  id: number;
  image: string;
  caption: string;
  social: string;
}

export const SocialPost = ({ post }: { post: Post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto flex flex-col p-4 relative dark:border-2 dark:bg-background"
    >
      <div className="flex items-center space-x-2 mb-16">
        <img
          src={post.social}
          alt="Red Social"
          className="absolute top-0 left-0 w-[80px] h-[80px] object-contain"
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-gray-500 font-semibold text-sm dark:text-white">{post.caption}</p>
      </div>
      <div className="relative">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};
