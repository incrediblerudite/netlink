import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export function ProjectCard({ image, title, description, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-tech-gray rounded-xl overflow-hidden border border-tech-border hover:border-orange transition-colors duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-orange/10 text-orange border-none text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-tech-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
