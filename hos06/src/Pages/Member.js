import { useParams } from "react-router-dom";
function Member() {
  const { id } = useParams();
  return (
    <div>
      <h2>Member Details</h2>
      <p>Member Id: {id}</p>
    </div>
  );
}
export default Member;
