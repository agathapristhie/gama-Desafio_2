import CartItem from '../CartItem/CartItem';
import {Container} from './Cart.styles';
import IProduct from '../view/Home/index';

type Props = {
    cartItems: typeof IProduct[];
  //  addToCart: (clickedItem: IProduct) => void;
    removefromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, removefromCart}) =>
{
return (
    <Container>
        <h2> Seu carrinho de compras </h2>
        {cartItems.length === 0 ? <p> Seu carrinho está vazio!</p>: null}

    </Container>

);
};

export default Cart;

