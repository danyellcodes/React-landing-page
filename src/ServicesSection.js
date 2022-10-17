import ServiceBlock from "./ServiceBlock";

export default function ServicesSection() {
  const serviceBlock = [
    {
      id: 1,
      imgUrl: "https://assets.codepen.io/6060109/agency-service-1.png",
      value: "web design"
    },
    {
      id: 2,
      imgUrl: "https://assets.codepen.io/6060109/agency-service-2.png",
      value: "ecommerce"
    },
    {
      id: 3,
      imgUrl: "https://assets.codepen.io/6060109/agency-service-3.png",
      value: "automation"
    }
  ];

  const serviceBlockElement = serviceBlock.map((block) => {
    return (
      <ServiceBlock key={block.id} imgUrl={block.imgUrl} value={block.value} />
    );
  });

  return (
    <div className="services__container">
      <h2 className="services__header">our services</h2>
      <div className="services-images__grid">
        {serviceBlockElement}
        {/* <div className="services-images__column">
          <img
            src="https://assets.codepen.io/6060109/agency-service-1.png"
            alt="web design"
          />
          <p className="services__paragraph">web design</p>
        </div>
        <div className="services-images__column">
          <img
            src="https://assets.codepen.io/6060109/agency-service-2.png"
            alt="ecommerce"
          />
          <p className="services__paragraph">ecommerce</p>
        </div>
        <div className="services-images__column">
          <img
            src=" https://assets.codepen.io/6060109/agency-service-3.png"
            alt="automation"
          />
          <p className="services__paragraph">automation</p>
        </div> */}
      </div>
    </div>
  );
}
