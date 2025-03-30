import { motion } from "framer-motion";
import { SocialPost, Post } from "@/components/molecules/home/socialPost";

const posts: Post[] = [
  {
    id: 1,
    image: "images/post-1.webp",
    caption:
      "Gran variedad de alimentos funcionales, ¡y todo adaptado a mis necesidades",
    social: "images/instagram.webp",
  },
  {
    id: 2,
    image: "images/post-2.webp",
    caption:
      "Una plataforma que te cuida. Productos saludables y de calidad en minutos",
    social: "images/instagram.webp",
  },
  {
    id: 3,
    image: "images/post-3.webp",
    caption: "Productos saludables y de calidad en solo minutos. ¡Que genial!",
    social: "images/facebook.webp",
  },
];

export default function SocialFeedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
    >
      <motion.div
        className="relative z-0 flex flex-wrap justify-center items-center gap-10 lg:gap-60 w-[135%] sm:w-[200%] bg-trinup-green-light py-10 overflow-visible"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center text-trinup-light"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          NUESTRO PÚBLICO
        </motion.h1>
      </motion.div>
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
              src="images/facebook.webp"
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
              src="images/facebook.webp"
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
          <img
            src="images/fondo-black.webp"
            alt="Red Social"
            className=" w-[100%] lg:w-[70%]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
