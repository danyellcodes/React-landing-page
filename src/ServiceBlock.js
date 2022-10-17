export default function ServiceBlock(props) {
  return (
    <div className="services-images__column">
      <img src={props.imgUrl} alt="{props.value}" />
      <p className="services__paragraph">{props.value}</p>
    </div>
  );
}
