import styles from '../styles/EMO.module.css';

export default function EMO({ employee }) {
  return (
    <div className='page-container'>
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  );
  const employee = await apiResponse.json();

  return {
    props: { employee }
  };
};
