import SkillCard from '../../components/cv/SkillCard'

const skills = [
  { title: 'Backend', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Backend', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Backend', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Backend', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const CV = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="relative w-full max-w-7xl">
        <div className="flex gap-12">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=630&h=322&fit=crop&crop=face"
            alt="Profile"
            className="w-[630px] h-[322px] rounded-[10px] object-cover bg-gray-300 shrink-0"
          />

          <div className="pt-12">
            <h1 className="font-roboto font-bold text-7xl text-black leading-tight">
              Kopi Jago
              <br />
              Paling Mantap
            </h1>
            <p className="font-inter text-2xl text-black mt-6">Full-stack Dev</p>
            <p className="font-roboto text-base text-black mt-4 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-roboto font-bold text-[40px] text-black mb-6">Skills</h2>
          <div className="flex gap-6 justify-between">
            {skills.map((card, i) => (
              <SkillCard key={i} title={card.title} description={card.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
