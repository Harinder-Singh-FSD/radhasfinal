import React from 'react'
import { Col, Row } from 'react-bootstrap';
import FlipCard from '../components/FlipCard';

const Deity = () => {
    const list = [
        {
          title: "Services for for your Deities",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6ypy0pWhmjeFwmxjvP-BfEj_BB55KuXLBXN2WEUHaIAIVIEplP2c9B4yKrDW-yFuc0WU9tq26AFd-Q&usqp=CAU",
            description:"Repair, Paint, Rejuvenate, Bathing, Fragrant oil Massaging, and Shringar for your Deities"
        },
        {
          title: "Customised ‘vaaghas'",
          imgUrl:
            "https://i.pinimg.com/236x/08/94/20/08942017c63a06efd11017f22ff9bbd1.jpg",
            description:"Customised ‘vaaghas’ for summer, winter, Janmashthami, festivals and Ekadasi"
        },
        {
          title: "Tulasi pot skirts",
          imgUrl:
            "https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMJUST-ORIGINAJUST113409761142846/1605751775922_4..jpg",
            description:'Customised Tulasi pot skirts'
        },
        {
            title: "Customised jewellery",
            imgUrl:
              "https://krishnastore.com/images/from_edt/Deity%20Clothing%20and%20Accessories/Crown-Necklace-Red-Green-Blue-Diamond-Thread-Pink-Circles/crown-necklace-deities-rgb-dmd2.jpg",
              description:'Customised Tulasi pot skirts'
          },
          {
            title: "Altar Décor",
            imgUrl:
              "https://i2.wp.com/rohayati.com/wp-content/uploads/2020/02/Asian-Altar.jpg?resize=1024%2C1024",
              description:'Altar décor, setting up altars and changing ‘vaaghas’ of your Deities at home each Ekadasi'
          },
          {
            title: "Altar Décor",
            imgUrl:
              "https://i2.wp.com/rohayati.com/wp-content/uploads/2020/02/Asian-Altar.jpg?resize=1024%2C1024",
              description:'Altar décor, setting up altars and changing ‘vaaghas’ of your Deities at home each Ekadasi'
          },
          {
            title: "Customised Altar for your home",
            imgUrl:
              "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/05/16114614/cover-4-1.png",
              description:'We can create design of your customised Altar for your home and take orders to have it made from scratch or you may order ready-made Altars'
          },
    
      ];
    return (
        <div>
            <h2>DEITY SPA & JEWELLERY</h2>
            <h5>Spiritual Spa Services for your Deities! All Deity sizes and of material enjoy our Spiritual Spa.</h5>
            <Row
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "auto",
                }}
              >
                {list.map((item) => {
                  return (
                    <Col style={{ margin: "1rem" }}>
                      <FlipCard item={item} />
                    </Col>
                  );
                })}
              </Row>
        </div>
    )
}

export default Deity
