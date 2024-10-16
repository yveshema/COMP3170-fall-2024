import { MdClose } from 'react-icons/md';

export default function CartPreview({ hideCart, children }) {
    return (
        <dialog id="cart-modal">
            <div>
                <h3>Shopping cart</h3>
                <button onClick={hideCart}><MdClose /></button>
            </div>
            {children}
        </dialog>
    );
}