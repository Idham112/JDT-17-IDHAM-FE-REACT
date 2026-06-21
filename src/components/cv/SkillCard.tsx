interface SkillCardProps {
  title: string
  description: string
}

const SkillCard = ({ title, description }: SkillCardProps) => {
  return (
    <div className="w-60 shrink-0 rounded-xl bg-gray-300">
      <div className="h-40 relative">
        <p className="absolute top-9 left-6 font-roboto font-medium text-3xl text-black leading-tight">
          {title}
        </p>
        <p className="absolute top-20 left-6 w-52 font-roboto font-light text-base text-black leading-snug">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SkillCard
