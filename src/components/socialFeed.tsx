"use client";

import { motion } from "framer-motion";

interface Post {
  id: number;
  image: string;
  caption: string;
  social: string;
}

const posts: Post[] = [
  {
    id: 1,
    image: "/post-1.png",
    caption:
      "Gran variedad de alimentos funcionales, ¡y todo adaptado a mis necesidades",
    social: "/instagram.png",
  },
  {
    id: 2,
    image: "/post-2.png",
    caption:
      "Una plataforma que te cuida. Productos saludables y de calidad en minutos",
    social: "/instagram.png",
  },
  {
    id: 3,
    image: "/post-3.png",
    caption: "Productos saludables y de calidad en solo minutos. ¡Que genial!",
    social: "/facebook.png",
  },
];

const SocialPost = ({ post }: { post: Post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto flex flex-col p-4 relative"
    >
      <div className="flex items-center space-x-2 mb-16">
        <img
          src={post.social}
          alt="Red Social"
          className="absolute top-0 left-0 w-[80px] h-[80px] object-contain"
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-gray-500 font-semibold text-sm">{post.caption}</p>
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

export default function SocialFeed() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg mx-auto p-4 flex flex-col space-y-4 relative"
        >
          <img
            src="/facebook.png"
            alt="Red Social"
            className="absolute top-0 left-0 w-[80px] h-[80px] object-contain"
          />

          <div className="pl-16 pr-4">
            <p className="text-gray-900 font-semibold text-base leading-relaxed">
              TRINUP hace que cuidar mi salud sea accesible y sencillo. <br />
              <span className="font-bold">¡Totalmente recomendado!</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg mx-auto p-4 flex flex-col space-y-4 relative"
        >
          <img
            src="/facebook.png"
            alt="Red Social"
            className="absolute top-0 left-0 w-[80px] h-[80px] object-contain"
          />

          <div className="pl-16 pr-4">
            <p className="text-gray-900 font-semibold text-base leading-relaxed">
              TRINUP es la forma más fácil de comer saludable! <br />
              <span className="font-bold">
                Productos frescos y adaptados a mí
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"
      >
        {posts.map((post) => (
          <SocialPost key={post.id} post={post} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mt-10"
      >
        <img src="/fondo-black.png" alt="Red Social" className=" w-[100%] lg:w-[70%]" />
      </motion.div>
    </div>
  );
}
