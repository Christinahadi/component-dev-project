import "./AdContainer.css"
import blackPants01 from "../assets/black-pants01.png"
import blackPants02 from "../assets/black-pants02.png"
import blackPants03 from "../assets/black-pants03.png"
import blackPants04 from "../assets/black-pants04.png"
const AdContainer = () => {
  return (
    <div className="AdContainer">
      <h4 className="adContainer__header">This is our AdContanier Component</h4>
      <div className="image-container">
        <div className="figure">
          <img className="adContainer__img" src={blackPants01} alt="Libins Men's Dress..."/>
          <p>Libins Men's Dress...</p>
        </div>
        <div className="figure">
          <img className="adContainer__img" src={blackPants02} alt="Van Heusen Men's"/>
          <p>Van Heusen Men's</p>
        </div>
        <div className="figure">
          <img className="adContainer__img" src={blackPants03} alt="Dress pants closout..."/>
          <p>Dress pants closout...</p>
        </div>
        <div className="figure">
          <img className="adContainer__img" src={blackPants04} alt="Wholesale Men's Dress Pants"/>
          <p>Wholesale Men's Dress Pants</p>
        </div>
        {/* <figure>
          <img className="adContainer__img" src={blackPants01} alt="Libins Men's Dress..."/>
          <figcaption><p>Libins Men's Dress...</p></figcaption>
        </figure> */}
        {/* <figure>
          <img className="adContainer__img" src={blackPants02} alt="Van Heusen Men's"/>
          <figcaption><p>Van Heusen Men's</p></figcaption>
        </figure>
        <figure>
          <img className="adContainer__img" src={blackPants03} alt="Libins Men's Dress..."/>
          <figcaption><p>Dress pants closout...</p></figcaption>
        </figure>
        <figure>
          <img className="adContainer__img" src={blackPants04} alt="Wholesale Men's Dress Pants"/>
          <figcaption><p>Wholesale Men's Dress Pants</p></figcaption>
        </figure> */}
      </div>

    </div>
  );
}

export default AdContainer;
