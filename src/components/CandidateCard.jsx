import styles from "./CandidateCard.module.css";

function CandidateCard({
  avatar,
  name,
  comapny_name,
  rating,
  salary
}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src={avatar} />
      <div>
        <div>Name:{name}</div>
        <div>Title & Company Name:{comapny_name}</div>
      </div>
      <div>$ Salary:${salary}</div>
    </div>
  );
}

export default CandidateCard;
