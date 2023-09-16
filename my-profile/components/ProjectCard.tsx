import Image from 'next/image'

export default function ProjectCard(props: { title: string, desc: string, tags: Array<string>, imgSrc: string }) {
  return (
    <div className="max-w-sm min-w-40 rounded overflow-hidden shadow-lg bg-white mr-5 mb-5 flex-auto">
      <Image
        src={props.imgSrc != "" ? require(`../public/${props.imgSrc}`) : ""}
        alt=""
        className='object-cover w-full h-44'
        placeholder='empty'
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
          props.tags.map((tag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>))
        }
      </div>
    </div>
  );
}
