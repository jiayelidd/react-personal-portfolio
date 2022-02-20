
import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  //这个必须加{}, 要不然就得是props
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}