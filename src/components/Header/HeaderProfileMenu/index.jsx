import "./style.css"

export default function HeaderProfileMenu() {
  return (
    <div className="profile-menu">
      <div className="image-section">
        <img src="/imgs/profile-pic.jpg" alt="" />
        <span>RICHARDY</span>
      </div>
      <div className="image-section">
        <img src="/imgs/profile-pic.jpg" alt="" />
        <span>MARIANA</span>
      </div>
      <div className="image-section">
        <img src="/imgs/profile-pic.jpg" alt="" />
        <span>RENATA</span>
      </div>




      <div className="icon-section">
        <i className="fa-solid fa-pen"></i>
        <span>Gerenciar perfis</span>
      </div>
      <div className="icon-section"></div>
    </div>
  )
}