import Header from '../components/header'
import DateFormatter from '../components/date-formatter'


export default function Card({ title, thumbnail, created_at ,link, categories}) {
  return (
     <>
     <a href={link}>
        <div className="card hover:border-gray-100	  " >
            
          <div className="card-body">
              <div className="user">
              <img src="https://i.pinimg.com/736x/97/47/80/974780477b469051cbee9d81a020d52c.jpg" alt="user" />
              <div className="user-info font-bold">
                <h4>Okezone.com</h4>
                <small>{categories}</small>
              </div>
            </div>
            <h4 className="text-white font-bold">{title}</h4>
            <span>
              <DateFormatter dateString={created_at}/>
             {/* {} */}
            </span>
          </div>
           <div className="card-img">
            <img src={thumbnail} alt="rover" />
            </div>
        </div>
        </a>
    </>
  )
}
