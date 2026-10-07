
// function CoreConcept(props) {

//     return (
//         <li>
//             <img src={props.img} alt=''></img>
//             <h3>{props.title}</h3>
//             <p>{props.desc}</p>
//         </li>

//     );

// }

function CoreConcept({title, desc, img}) {

    return (
        <li>
            <img src={img} alt=''></img>
            <h3>{title}</h3>
            <p>{desc}</p>
        </li>

    );

}

export default CoreConcept;


