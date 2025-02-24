<script>
    
    import { onMount } from "svelte";
    
    let products = [
    { name: 'TV', price: 9999, image: '/images/store/bigtv.png' },
    { name: 'Laptop', price: 1000, image: '/images/store/laptop.jpg' },
    { name: 'RTX 2080Ti', price: 3200, image: '/images/store/gpu.png' },
    { name: 'Toaster', price: 50, image: '/images/store/toaster.jpg' },
    { name: 'Soldier Merc', price: 90769, image: '/images/tits.webp' },
    { name: 'Ambatron', price: 100750, image: '/images/store/ambatron.jpg' }

    ];

    let cart = [];
    let sortBy = 'alphabetical';

    function addToCart(product) {
    const index = cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
            cart[index].quantity += 1;

        cart = [...cart];
    } else {
        cart = [...cart, { ...product, quantity: 1 }];
    }
    }

    function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    }

    function updateQuantity(item, event) {
    const qty = parseInt(event.target.value);
    if (qty > 0) {
        item.quantity = qty;
      cart = [...cart]; // trigger reactivity
    }
    }
    

    //total amount of cash bruh
    $: totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    $: sortedProducts = products.sort((a, b) => {
        if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
        if (sortBy === 'priceHigh') return b.price - a.price;
        if (sortBy === 'priceLow') return a.price - b.price;
        return 0; 
});
    onMount(() => {
        document.getElementById('sort-select').addEventListener('change', function () {
        const sortValue = this.value;
        const productsContainer = document.querySelector('.products');
        // Convert NodeList to Array for sorting
        const productsArray = Array.from(productsContainer.querySelectorAll('.product-item'));
        
        productsArray.sort((a, b) => {
            if (sortValue === 'alphabetical') {
            const nameA = a.getAttribute('data-name').toLowerCase();
            const nameB = b.getAttribute('data-name').toLowerCase();
            return nameA.localeCompare(nameB);
            } else if (sortValue === 'priceHigh') {
            const priceA = parseFloat(a.getAttribute('data-price').replace('$', ''));
            const priceB = parseFloat(b.getAttribute('data-price').replace('$', ''));
            return priceB - priceA;
            } else if (sortValue === 'priceLow') {
            const priceA = parseFloat(a.getAttribute('data-price').replace('$', ''));
            const priceB = parseFloat(b.getAttribute('data-price').replace('$', ''));
            return priceA - priceB;
            }
        });

    });
        // Re-append sorted items to the container
        productsArray.forEach(product => {
            productsContainer.appendChild(product);
        });
    });
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h1 class="headerName">Elektroniki Butiki</h1>

<div class="sort-container">
    <label for="sort-select">Sort: </label>
    <select id="sort-select" bind:value={sortBy}>
        <option value="alphabetical">Alphabetical</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="priceLow">Price: Low → High</option>
    </select>
    </div>


<div class="container">

    <div class="products">
    {#each sortedProducts as product}
        <div class="product-item">
        <button class="add-button" on:click={() => addToCart(product)}>+</button>
        <img src={product.image} alt={product.name} class="product-image" />
        <div class="product-info">
            <span class="product-name">{product.name}</span>
            <span class="product-price">{product.price} kr</span>
        </div>
        </div>
    {/each}
    </div>

    <div class="cart">
        <h3 class="cartTitle">Shopping Cart</h3>
        <div class="cart-items">
            {#each cart as item}
                <div class="cart-item">
                    <img src={item.image} alt={item.name} class="cart-item-image" />
                    <div class="cart-item-info">
                        <span class="cart-item-name">{item.name}</span>
                        <span class="cart-item-price">{item.price} kr/st</span>
                        <input 
                            type="number" 
                            value={item.quantity} 
                            on:input={e => updateQuantity(item, e)}
                            class="quantity-input"
                            min="1"
                        />
                        <button on:click={() => removeFromCart(item.name)} class="remove-button">×</button>
                    </div>
                </div>
            {/each}
        </div>
        <div class="total-container">
            <h3 class="totalTitle">Total:</h3>
            <span class="totalAmount">{totalAmount} kr</span>
        </div>
    </div>

</div>

<style>
    .headerName{
        text-align: left;
        padding-top:10px;
        left:0;
        font-size: 40px;
    }
    .total-container {
    margin-top: auto;
    display: flex;
    align-items: baseline;
    gap: 15px;
    justify-content: center;
}
    .container {
        display: flex;
        padding-left: 10px;
        gap: 20px;
        width: 100vw;
        height: calc(100vh - 100px); /* Adjust based on header height */
    }
    .sort-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .cart {
        flex: 1; /* Takes 1/4 of the space */
        background-color: rgb(225, 225, 225);
        padding: 20px;
        display: flex;
        flex-direction: column;
        min-width: 350px; /* Minimum width for cart */
        overflow-y: auto;
    }
    .cart-items {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
        overflow-y: auto;
        flex-grow: 1;
    }
    .cart-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px;
        background: white;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .cart-item-image {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
    .cart-item-info {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-grow: 1;
    }
    .quantity-input {
        width: 60px;
        padding: 5px;
        margin-left: auto;
    }
    .remove-button {
        background: #ff4444;
        border: none;
        color: white;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
        font-size: 18px;
        line-height: 25px;
    }
    .remove-button:hover {
        background: #cc0000;
    }
    .cartTitle{
        text-align: center;
        font-size: 40px;
    }
    .totalTitle {
    font-size: 40px;
    margin: 0;
}

.totalAmount {
    font-size: 40px;
    font-weight: bold;
    color: #2c3e50;
}
    .products {

        width: 80vw;
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
        gap: 20px;
    }
    .product-name {
        font-size: 1.2rem;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product-price {
        font-size: 1.8rem;
        color: #2c3e50;
        font-weight: bold;
    }

    .product-info {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: rgba(255, 255, 255, 0.9);
        border-top: 1px solid #eee;
        margin-top: auto; /* Pushes info to bottom */
    }
    .product-item {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        position: relative;
        width: 300px;
        height: 350px; /* bigger hiehgh */
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .product-image {
        width: 100%;
        height: 250px; /* Fixed image height */
        object-fit: contain; /* Ensures image fits without distortion */
        padding: 15px;
        background: #f8f8f8;
    }
    


    .add-button {
        position: absolute;
        top: 0px;
        right: 0px;
        background: #ffffff;
        border: none;
        font-size: 30px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
    }

    .add-button:hover {
        background: #c7c7c7;
    }





    /*MOBILE FIXING SHIT*/
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
            padding: 10px;
        }

        .products {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .product-item {
            width: 100%;
            height: 400px;
            margin: 0 auto;
        }

        .product-image {
            height: 280px;
        }

        .add-button {
            width: 60px;
            height: 60px;
            font-size: 40px;
            line-height: 60px;
        }

        .cart {
            width: 100%;
            min-width: unset;
            height: 50vh;
            margin-top: 20px;
        }

        .cart-item-info {
            flex-wrap: wrap;
        }

        .quantity-input {
            width: 80px;
            font-size: 16px;
        }

        .product-price, .totalAmount {
            font-size: 30px;
        }

        .product-name {
            font-size: 1.5rem;
        }
    }
</style>