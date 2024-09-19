import img from './assets/bhagat-singh2.jpg'
function Card(){

    return(

        <div className='card'>
            <img src={img} alt="Bhagat Singh" />
           <h2>My Card</h2>
            <p>To Know about Bhagat visit the link once</p>
        </div>
    );
}

export default Card