import { motion } from 'framer-motion'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../style'
import Tilt from 'react-tilt'

const ProjectCard = ({
  index,
  name,
  edscription,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="sm:w-[calc(33.33%-19px)]  w-full"
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-secondary p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px] xl:h-[330px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:my-[80px]">
      <motion.div variants={textVariant()} className="xl:mx-0 xs:mx-[60px]">
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          Projects
        </h2>
      </motion.div>

      {/* work cards */}
      <div className="mx-[60px] xl:mx-0">
        <div className="mt-14 flex flex-wrap gap-7 w-full">
          {projects?.map((project, index) => (
            <ProjectCard index={index} key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
