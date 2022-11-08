interface propsTitle{
    title:string,
    subtitle:string,
   }

export default function Title(props: propsTitle){
    return(
        <div>
          <h1 className={`dark:font-bold dark:text-white text-3xl`}>
            {props.title}
          </h1>
          <h2 className={`dark:font-extralight text-sm`}>
            {props.subtitle}</h2>
        </div>
    )
}