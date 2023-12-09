export default function CoreConcepts({title,description,image}){ //destructuring
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
    
  }