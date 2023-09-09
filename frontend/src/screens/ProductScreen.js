import { useParams } from 'react-router-dom';

//get the slug from the url and show it in the screen, use a hook
function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
