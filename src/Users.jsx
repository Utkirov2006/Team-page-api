export default function Users(props) {

    const { data = [] } = props.data;

    console.log(data);

    return (
        <>
            <div className="card text-center bg-primary text-white m-5">Users list</div>

            <div className="container mx-auto m-4 d-flex">

                {data.map((item) => (

                    <div className="card m-2" style={{ "width": "18rem" }}>

                        <img className="card-img-top" src={item.avatar} alt="Card image cap" />

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{item.first_name}</li>
                            <li className="list-group-item">{item.last_name}</li>
                            <li className="list-group-item">{item.email}</li>
                        </ul>

                    </div>
                ))}
            </div></>

    )
}