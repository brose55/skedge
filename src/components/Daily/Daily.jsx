import "./Daily.css";
import areas from '../../db/db'

function Daily() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <ul>
        {
            areas.map((area, i) => (
                <li key={area.name + i}>{area.name} {area.priority}</li>
            ))
        }
      </ul>
    </main>
  );
}

export default Daily;
