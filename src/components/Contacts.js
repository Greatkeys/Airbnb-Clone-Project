import "../css/all.min.css"
export default function Contact({img, name, phone, email}){
    return(
    <div className="contact-card">
        <img src={img} alt="first-cat" />
        <h3>{name}</h3>
        <div className="info">
          <div className="first-info">
            <i className="fas fa-phone"></i>
            <p>{phone}</p>
          </div>
          <div className="first-info">
            <i className="fas fa-envelope"></i>
            <p>{email}</p>
          </div>
        </div>
    </div>
    )
}