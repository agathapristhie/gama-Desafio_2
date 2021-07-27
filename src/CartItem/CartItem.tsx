import Button from '@material-ui/core/Button';

import {CartItemType} from '../view/Home/index';

import { Container } from './CartItem.styles';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC <Props>= ({item, addToCart, removeFromCart}) => (
    <Container>
        <div>
            <h3>
                {item.description}
            </h3>
            <div className="information">
                <p> Preço: R${item.price}</p>
                <p>Total: R${(item.amount*item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button size="small"
                disableElevation
                variant = "contained"
                onClick={() => removeFromCart(item.id)}
                >
                -
                </Button>
                <p>{item.amount}</p>
                <Button size="small"
                disableElevation
                variant = "contained"
                onClick={() => addToCart(item)}
                >
                +
                </Button>
            </div>

        </div>
        <img src={item.photo} alt={item.name} />
    </Container>
)

export default CartItem;