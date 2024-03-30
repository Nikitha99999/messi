import './index.css'

const Header = () => (
  <div className="items-bl">
    <div>
      <h1 className="heading"> Birthday Party</h1>
      <div className=" items-ul">
        <p className="items-p">HOME</p>
        <p className="items-p">PARTY TIME</p>
        <p className="items-p">ABOUT PARTY</p>
        <p className="items-p">RSVP</p>
        <p className="items-p">GIFT REGISTRY</p>
      </div>
    </div>
    <div className="images">
      <img
        alt="birthday"
        className="images"
        src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711614260/Rectangle_20_dwumvc.png"
      />
    </div>
  </div>
)

export default Header
